import './HighlightsAndNews.css';
import { motion as Motion } from 'motion/react';
import { ImageWithFallback } from './components/ImageWithFallback';
import hacktocrack2024 from './assets/hacktocrack2024.png';
import genai2024 from './assets/genai2024.png';
import iwd from './assets/iwd.png';

const newsItems = [
  {
    id: '1',
    title: 'HackToCrack 1.0 Hackathon',
    date: 'May 23, 2024',
    description: '36 hours of machine learning and AI challenges. Join us for the biggest ML hackathon in Lucknow!',
    image: hacktocrack2024,
    link: '/hackathons',
  },
  {
    id: '2',
    title: 'GenAI Community Meetup',
    date: 'July 15, 2024',
    description: 'Our community came together to explore the latest in generative AI and TensorFlow applications.',
    image: genai2024,
    link: '/events',
  },
  {
    id: '3',
    title: 'International Women\'s Day',
    date: 'March 8, 2024',
    description: 'TFUG Lucknow celebrated International Women\'s Day with special workshops on AI inclusion.',
    image: iwd,
    link: '/events',
  },
  {
    id: '4',
    title: 'TensorFlow 3.0 Released',
    date: 'Sept 5, 2025',
    description: 'TensorFlow 3.0 brings revolutionary changes to the ML ecosystem with improved performance and new features.',
    image: genai2024,
    link: '/builds',
  },
  // Duplicate items to create continuous scrolling effect
  {
    id: '5',
    title: 'HackToCrack 1.0 Hackathon',
    date: 'May 23, 2024',
    description: '36 hours of machine learning and AI challenges. Join us for the biggest ML hackathon in Lucknow!',
    image: hacktocrack2024,
    link: '/hackathons',
  },
  {
    id: '6',
    title: 'GenAI Community Meetup',
    date: 'July 15, 2024',
    description: 'Our community came together to explore the latest in generative AI and TensorFlow applications.',
    image: genai2024,
    link: '/events',
  }
];

export function HighlightsAndNews() {
  return (
    <Motion.div 
      className="bg-[#1a1a1a] text-white p-6 rounded-lg border border-gray-800 h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Highlights & News</h2>
      
      {/* Scrolling news content - scrolling from bottom to top */}
      <div className="news-container">
        <div className="news-items">
          {newsItems.map((item) => (
            <a 
              href={item.link} 
              key={item.id}
              className="block flex flex-col p-3 rounded-lg bg-gray-800/30 mb-4 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                // Navigate to the tab using activeTab state in parent component
                if (typeof window !== 'undefined') {
                  const targetTab = item.link.substring(1); // Remove the leading slash
                  const navButtons = document.querySelectorAll('.tab-link');
                  
                  // Find and click the navigation button for that tab
                  navButtons.forEach(button => {
                    if (button.getAttribute('data-tab') === targetTab) {
                      button.click();
                    }
                  });
                }
              }}
            >
              <div className="mb-3 overflow-hidden rounded-md">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #f97316, #facc15)' }}>{item.title}</h3>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <p className="text-sm text-gray-300 leading-snug">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Motion.div>
  );
}
