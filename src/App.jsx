import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
    return (
        <div dir="rtl" className="font-sans bg-white text-darkText min-h-screen">
            <Header />
            <Hero />
            <main
                className="min-h-[600px] bg-cover bg-center bg-no-repeat bg-fixed relative"
                style={{ backgroundImage: 'url("/design-img.jpeg")' }}
            >
                <div className="relative z-10 py-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="/about" replace />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
