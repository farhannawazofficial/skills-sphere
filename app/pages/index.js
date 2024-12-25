import React from 'react'
import Head from 'next/head';

const index = () => {
  return (
    
      <div className="bg-pink-50 min-h-screen">
      <Head>
        <title>Skill Institute</title>
        <meta name="description" content="Advance your engineering skills with our courses" />
      </Head>

      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-purple-600 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full">
              Si
            </div>
            <span className="text-xl font-bold">Skill Institute</span>
          </div>
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-purple-600">Home</a>
            <a href="#" className="hover:text-purple-600">Courses</a>
            <a href="#" className="hover:text-purple-600">Mentors</a>
            <a href="#" className="hover:text-purple-600">Testimonial</a>
            <a href="#" className="hover:text-purple-600">Join</a>
            <a href="#" className="hover:text-purple-600">Contact Us</a>
          </nav>
          <div className="space-x-4">
            <a href="#" className="px-4 py-2 bg-purple-600 text-white rounded-md">Sign In</a>
            <a href="#" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md">Register</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Advance your engineering skills with our courses
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Build skills with our courses and mentors from world-class companies.
        </p>
        <div className="mt-6 flex items-center justify-center space-x-4">
          <div className="flex space-x-2 items-center">
            <img src="/mentor1.jpg" alt="Mentor" className="w-10 h-10 rounded-full" />
            <img src="/mentor2.jpg" alt="Mentor" className="w-10 h-10 rounded-full" />
            <img src="/mentor3.jpg" alt="Mentor" className="w-10 h-10 rounded-full" />
          </div>
          <div className="text-gray-800 text-lg">
            <span className="font-semibold">4.6 ★★★★☆</span> <span>Rated by 25k on Google</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-4 text-center">
        <p>&copy; 2024 Skill Institute. All rights reserved.</p>
      </footer>
    </div>
 

    
  )
}

export default index
