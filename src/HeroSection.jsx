import { Share, Users, MapPin, Instagram, Twitter, Linkedin, MessageSquare, MessageCircle, PhoneCall, Globe, GlobeIcon } from 'lucide-react';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/ImageWithFallback';
import { useEffect, useState, useRef } from 'react';
import './HeroSection.css';
import heroImage from './assets/banner_image-tfug-lucknow.png';
import skylineImage from './assets/lucknow-skyline.svg';

export function HeroSection() {
  const [isZoomed, setIsZoomed] = useState(false);
  const skylineRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (skylineRef.current && window.scrollY > 100) {
        setIsZoomed(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger zoom animation after a short delay on page load
    const timer = setTimeout(() => {
      setIsZoomed(true);
    }, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* Hero Image Section */}
      <div className="relative">
        <div className="h-[24rem] overflow-hidden">
          <ImageWithFallback 
            src={heroImage}
            alt="Lucknow Architecture"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="overlay-gradient"></div>
          
          {/* Lucknow Skyline Silhouette with zoom animation */}
          <div className="skyline-container">
            <img 
              ref={skylineRef}
              src={skylineImage} 
              alt="Lucknow Skyline"
              className={`skyline-image ${isZoomed ? 'zoom-on-scroll' : ''}`}
            />
          </div>
        </div>
        
        {/* TensorFlow Logo Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          { /* logo Image goes here for being at border in case needed and need to edit some css*/ }
        </div>
      </div>
      {/* Community Info Section */}
      <div className="min-w-screen mx-auto px-24 md:px-48 lg:px-72 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1 lg:w-2/3">
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-3xl font-bold">TFUG Lucknow</h1>
            </div>
            <div className="flex items-center space-x-6 text-gray-300 mb-4">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>1200+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true" className="text-blue-400 hover:text-blue-300 transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Linkedin className="h-4 w-4 text-white" />
                </div>
              </a>
              <a href="https://x.com/TFUGlucknow" className="text-blue-400 hover:text-blue-300 transition-colors">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <Twitter className="h-4 w-4 text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/aicommunitylucknow/" className="text-blue-400 hover:text-blue-300 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 rounded flex items-center justify-center">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
              </a>
              <a href="https://discord.com/channels/1165604190475792434/1165604190475792436" className="text-blue-400 hover:text-blue-300 transition-colors">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                  {/* Custom Discord Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white">
                    <path d="M9 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M15 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7.5 7.5c8.5-1.5 9.5 0 10.5 1.5M7 16.5c7 1 8 0 10-1.5" />
                    <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7.5-.5-1.667-1.5-4.5-7-7S1.5 6.5 1 9.5c-.5 2.333-.5 5.833.5 8.5S5 20.5 7 20c1.5-.5 2.5-2.5 2.5-3.5" />
                  </svg>
                </div>
              </a>
              <a href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" className="text-blue-400 hover:text-blue-300 transition-colors">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  {/* Custom WhatsApp Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                  </svg>
                </div>
              </a>
               <a href="https://www.commudle.com/communities/tfug-lucknow" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-blue-300 text-sm">Co</span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end " style={{ width: '33.333%' }}>
            <a
              className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              href="https://https//chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
            >
              <span className="block rounded-xs bg-[#1a1a1a] px-8 py-3 text-sm font-medium text-blue-400 group-hover:text-white group-hover:bg-transparent">
                Join Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
