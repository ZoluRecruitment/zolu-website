// api/apply.js  (ESM; your package.json has "type": "module")
import Busboy from "busboy";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // CORS/preflight (optional)
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { fields, file } = await parseMultipart(req);

    if (!fields.email) throw new Error("Email is required");
    if (!file?.buffer) throw new Error("Resume file is required");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.sendgrid.net",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // "apikey"
        pass: process.env.SMTP_PASS, // your SendGrid API key
      },
    });

    const to = process.env.MAIL_TO || "admin@zolurecruitment.com";
    const from = process.env.MAIL_FROM || "no-reply@zolurecruitment.com";
    const subject = `ZoLu Application — ${(fields.first_name || "")} ${(fields.last_name || "")} ${fields.job_title ? `(${fields.job_title})` : ""}`.trim();

    const text = `
New application received.

Name: ${fields.first_name || ""} ${fields.last_name || ""}
Email: ${fields.email || ""}
Phone: ${fields.phone || ""}
Job: ${fields.job_title || "Quick Apply"} [${fields.job_id || "-"}]

Cover Letter:
${fields.cover_letter || "(none)"}
`.trim();

    const html = `
<h3>New application received</h3>
<p><strong>Name:</strong> ${escapeHtml(fields.first_name || "")} ${escapeHtml(fields.last_name || "")}</p>
<p><strong>Email:</strong> ${escapeHtml(fields.email || "")}</p>
<p><strong>Phone:</strong> ${escapeHtml(fields.phone || "")}</p>
<p><strong>Job:</strong> ${escapeHtml(fields.job_title || "Quick Apply")} <em>[${escapeHtml(fields.job_id || "-")}]</em></p>
<p><strong>Cover Letter:</strong></p>
<pre style="white-space:pre-wrap">${escapeHtml(fields.cover_letter || "(none)")}</pre>
`.trim();

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments: [
        {
          filename: file.filename || "resume",
          content: file.buffer,
          contentType: file.mimetype || "application/octet-stream",
        },
      ],
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("apply error:", err);
    return res.status(400).json({ error: (err && err.message) ? err.message : "Bad Request" });
  }
}

// ---- helpers ----
function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const bb = Busboy({ headers: req.headers, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB
    const fields = {};
    const file = { buffer: null, filename: "", mimetype: "" };
    const chunks = [];

    bb.on("field", (name, val) => {
      fields[name] = val;
    });

    bb.on("file", (_name, stream, info) => {
      file.filename = info.filename;
      file.mimetype = info.mimeType || info.mime || "";
      stream.on("data", (d) => chunks.push(d));
      stream.on("limit", () => reject(new Error("File too large (max 5MB)")));
      stream.on("end", () => {
        file.buffer = Buffer.concat(chunks);
      });
    });

    bb.on("error", reject);
    bb.on("finish", () => resolve({ fields, file }));
    req.pipe(bb);
  });
}

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[s]));
}
