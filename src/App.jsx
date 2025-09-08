import { useState } from 'react';
import { Header } from './Header.jsx';
import { HeroSection } from './HeroSection.jsx';
import { ContentNavigation } from './ContentNavigation.jsx';
import { AboutSection } from './AboutSection.jsx';
import { HighlightsAndNews } from './HighlightsAndNews.jsx';
import { EventsSection } from './EventsSection.jsx';
import { HackathonsSection } from './HackathonsSection.jsx';
import { TeamSection } from './TeamSection.jsx';
import { BuildsSection } from './BuildsSection.jsx';
import { ContactUsSection } from './ContactUsSection.jsx';
import skylineImage from './assets/lucknow-skyline.svg';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AboutSection />
            </div>
            <div className="lg:col-span-1">
              <HighlightsAndNews />
            </div>
          </div>
        );
      case 'events':
        return <EventsSection />;
      case 'hackathons':
        return <HackathonsSection />;
      case 'team':
        return <TeamSection />;
      case 'builds':
        return <BuildsSection />;
      case 'contact':
        return <ContactUsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ContentNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-[#1a1a1a] border-t border-gray-800 mt-16 relative">
        <div className="skyline-footer-container">
          <img 
            src={skylineImage}
            alt="Lucknow Skyline" 
            className="skyline-footer w-full h-[80px] object-contain opacity-20 transform scale-x-[-1]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">© 2025 TFUG Lucknow - TensorFlow User Group</p>
            <p className="text-sm">
              This is an independent community. Our activities and opinions are not linked to Google.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
