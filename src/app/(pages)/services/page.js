import React from 'react'

function page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
     
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-400 text-white py-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Our Expert Services</h2>
          <p className="text-lg sm:text-xl mb-6">Transforming your business with innovative and customized solutions.</p>
          <a
            href="#services"
            className="inline-block py-3 px-8 text-white font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 transition duration-300"
          >
            Discover Our Services
          </a>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-4xl text-teal-600 mb-6">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h4>
              <p className="text-gray-600">
                We create responsive and visually appealing websites to ensure your online success. From design to development, we've got you covered.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-4xl text-teal-600 mb-6">
                <i className="fas fa-search"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h4>
              <p className="text-gray-600">
                Boost your website's visibility with our SEO services. We optimize your website to ensure it ranks highly on search engines.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-4xl text-teal-600 mb-6">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h4>
              <p className="text-gray-600">
                Drive more traffic and conversions with our data-driven digital marketing strategies, tailored to your business goals.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-4xl text-teal-600 mb-6">
                <i className="fas fa-users"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Brand Strategy</h4>
              <p className="text-gray-600">
                Establish a strong, lasting brand identity with our expert brand strategy services, ensuring your business stands out in the market.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-4xl text-teal-600 mb-6">
                <i className="fas fa-cogs"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Consulting</h4>
              <p className="text-gray-600">
                Our experienced consultants help businesses streamline processes and optimize operations to achieve long-term success.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="text-4xl text-teal-600 mb-6">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">App Development</h4>
              <p className="text-gray-600">
                From concept to launch, we design and develop custom mobile applications that deliver a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-6">Ready to Get Started?</h3>
        <p className="mb-8">We'd love to help you grow your business. Contact us today to learn how we can help you achieve your goals.</p>
        <a
          href="/contact"
          className="inline-block py-3 px-8 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default page