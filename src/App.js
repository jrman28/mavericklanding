import React from 'react';

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4">
        <div className="text-lg font-bold">Maverick Landing</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero bg-cover bg-center h-screen" style="background-image: url('path/to/your/image.jpg');">
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Maverick Landing</h1>
          <p className="text-xl mt-4">Your perfect getaway destination</p>
          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default App;
