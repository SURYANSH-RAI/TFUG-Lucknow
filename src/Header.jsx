import { Search } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import './Header.css';
import tfugLogo from './assets/tfug-logo.jpg';

export function Header() {
  return (
    <header className="bg-[#1a1a1a] px-6 py-4">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo on left, Search Bar on right */}
        <div className="flex-1">
          <a href="/" className="inline-block">
            <img 
              src={tfugLogo} 
              alt="TFUG Lucknow Logo" 
              className="h-12 max-w-[240px]" 
            />
          </a>
        </div>
        
        {/* Search Bar - Positioned on the right */}
        <div className="relative max-w-[400px] w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            placeholder="Search TensorFlow, ML, AI, events..."
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 rounded-md py-2.5 px-4 w-full text-base"
          />
        </div>
      </div>
    </header>
  );
}
