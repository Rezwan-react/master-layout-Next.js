import React from 'react'

function page() {
  return (
    <>
        <div className=" w-full bg-gray-100">
     
            <section className="py-20 px-8 ">
                <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                <p className="text-gray-600 mt-4">
                    We are a team of passionate developers dedicated to building great products.
                </p>
                </div>
            </section>

      
                <section className="py-16 bg-gray-200">
                    <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-3xl font-semibold text-gray-800">Meet Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
                        <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
                        <p className="text-gray-600">Lead Developer</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800">Sam Brown</h4>
                        <p className="text-gray-600">UX/UI Designer</p>
                        </div>
                    </div>
                    </div>
                </section>

     
                <footer className="bg-gray-800 text-white py-6 text-center">
                    <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
                </footer>
        </div>
    </>
  )
}

export default page