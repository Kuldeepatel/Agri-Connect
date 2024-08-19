import React, { useEffect } from 'react';
import NavBar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <NavBar />

            {/* Hero Section */}
            <section 
                className="relative bg-cover bg-center h-72 sm:h-screen" 
                style={{ backgroundImage: 'url(https://example.com/farming-image.jpg)' }}
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4 sm:p-0">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-4" data-aos="fade-up" data-aos-delay="200">
                        Empowering Agriculture with Technology
                    </h1>
                    <p className="text-sm sm:text-xl md:text-2xl mb-4 sm:mb-8" data-aos="fade-up" data-aos-delay="400">
                        Improving yield, sustainability, and access to vital information.
                    </p>
                    <a 
                        href="#learn-more" 
                        className="bg-orange-500 text-black font-semibold px-4 py-2 sm:px-8 sm:py-4 rounded-lg hover:bg-orange-400 transition-transform transform hover:scale-105" 
                        data-aos="fade-up" 
                        data-aos-delay="600"
                    >
                        Discover More
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section id="learn-more" className="py-10 sm:py-20 bg-gray-100">
                <div className="container mx-auto text-center px-4 sm:px-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12" data-aos="fade-up">
                        Our Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
                        <div 
                            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300" 
                            data-aos="fade-up" 
                            data-aos-delay="200"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">Disease Detection</h3>
                            <p>Leverage AI to detect and diagnose crop diseases in real-time, ensuring early intervention and better yield.</p>
                        </div>
                        <div 
                            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300" 
                            data-aos="fade-up" 
                            data-aos-delay="400"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">Weather Updates</h3>
                            <p>Get precise, up-to-date weather forecasts tailored to your farm's location, enabling smarter decisions.</p>
                        </div>
                        <div 
                            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300" 
                            data-aos="fade-up" 
                            data-aos-delay="600"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">Government Schemes</h3>
                            <p>Stay informed on government initiatives and schemes that offer financial support and benefits for farmers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
