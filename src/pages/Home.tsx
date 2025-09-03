// src/pages/Home.tsx
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center">
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
                  className="bg-gradient-to-br from-dark-gray to-black text-white px-8 py-4 rounded-lg font-semibold text-lg text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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

            <div className="relative">
              <div className="w-full h-96 bg-light-gray rounded-2xl flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-dark-gray"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 15.9 11 17 11V20C17 21.1 16.1 22 15 22H9C7.9 22 7 21.1 7 20V11C8.1 11 9 10.1 9 9V7H3V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-4">Why Choose Us</h2>
            <p className="text-xl text-dark-gray max-w-3xl mx-auto">
              We understand that great matches create lasting success. Our approach combines industry
              expertise with personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
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

            <div className="bg-light-cream p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Quality First</h3>
              <p className="text-dark-gray">
                We prioritize quality over quantity, focusing on long-term relationships and sustainable career growth.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-dark-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">24/7 Support</h3>
              <p className="text-dark-gray">
                Our dedicated support team is always available to assist you throughout your journey with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-light-gray mb-8">
            Join thousands of professionals and companies who trust us to make the right connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-white text-dark-gray px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-all duration-300"
            >
              Post a Job
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-gray transition-all duration-300"
            >
              Upload Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
