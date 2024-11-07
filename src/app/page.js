import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">Building modern web applications with Next.js and Tailwind CSS</p>
        <button className="mt-8 bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Features</h2>
          <p className="text-gray-600 mt-4">
            Discover the powerful features and tools that we offer to help you succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Feature 1</h3>
              <p className="text-gray-600 mt-2">Description of the first feature and its benefits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Feature 2</h3>
              <p className="text-gray-600 mt-2">Description of the second feature and its advantages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Feature 3</h3>
              <p className="text-gray-600 mt-2">Description of the third feature and its benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-200 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-4">
            We are a dedicated team focused on delivering the best web solutions for our clients.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}
