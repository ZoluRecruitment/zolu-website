// src/pages/Home.tsx
import { useState } from "react";

export default function Home() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white opacity-10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-dark-gray opacity-5 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-dark-gray leading-tight mb-6">
                Connect Talent with <span className="text-black">Opportunity</span>
              </h1>
              <p className="text-xl text-dark-gray mb-8 leading-relaxed">
                We bridge the gap between exceptional professionals and forward-thinking companies.
                Whether you're seeking top talent or your next career move, we make meaningful connections happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/services"
                  className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg text-center"
                >
                  Find Staff
                </a>
                <a
                  href="/contact"
                  className="border-2 border-dark-gray text-dark-gray px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-gray hover:text-white transition-all duration-300 text-center"
                >
                  Find Work
                </a>
              </div>
            </div>

            {/* IMAGE BOX — darker panel, ring, shadow, logo fills box */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-[#b9b6ac] ring-1 ring-[#9f9d95] shadow-md">
                {imgOk ? (
                  <img
                    src="/Logo.png?v=3"
                    alt="ZoLu Recruitment Logo"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-dark-gray flex items-center justify-center">
                    <span className="text-white font-bold text-8xl">Z</span>
                  </div>
                )}
              </div>
            </div>
            {/* /IMAGE BOX */}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-4">Why Choose Us</h2>
            <p className="text-xl text-dark-gray max-w-3xl mx-auto">
              We understand that great matches create lasting success. Our approach combines industry expertise with personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-cream p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L20.29 9.12L22 10.83V6H16Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Expert Matching</h3>
              <p className="text-dark-gray">
                Our experienced team uses advanced screening processes to ensure perfect fits between candidates and companies.
              </p>
            </div>

            <div className="card-hover bg-light-cream p-8 rounded-2xl text-center">
