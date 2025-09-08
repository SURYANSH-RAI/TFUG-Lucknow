import { Info, Calendar, Trophy, Users, UserPlus, Hash, MessageSquare, Code, BookOpen, Cpu, Building } from 'lucide-react';
import { motion } from 'motion/react';
import './ContentNavigation.css';

const navigationItems = [
  { id: 'about', label: 'About', icon: <Info className="h-4 w-4" /> },
  { id: 'events', label: 'Events', icon: <Calendar className="h-4 w-4" /> },
  { id: 'hackathons', label: 'Hackathons', icon: <Code className="h-4 w-4" /> },
  { id: 'team', label: 'Team', icon: <Users className="h-4 w-4" /> },
  { id: 'builds', label: 'Builds', icon: <Building className="h-4 w-4" /> },
  { id: 'contact', label: 'Contact Us', icon: <MessageSquare className="h-4 w-4" /> },
];

export function ContentNavigation({ activeTab, onTabChange }) {
  return (
    <div className="bg-[#1a1a1a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-0">
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              data-tab={item.id}
              className={`tab-link relative flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.count && (
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  {item.count}
                </span>
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </div>
  );
}
