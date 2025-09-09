import { useState } from "react";
import QuickApplyModal from "../components/QuickApplyModal";

export default function FindWork() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      {/* Quick Apply button */}
      <div className="text-center my-8">
        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Quick Apply
        </button>
      </div>

      {/* Rest of page content ... */}

      {showModal && <QuickApplyModal onClose={() => setShowModal(false)} />}
    </main>
  );
}
