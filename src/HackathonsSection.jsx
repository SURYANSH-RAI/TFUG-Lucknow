import { motion as Motion } from 'motion/react';
import { Calendar, Trophy, Code, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';
import hack1 from './assets/Hack1.jpeg';
import hack2 from './assets/Hack2.jpeg';
import hack3 from './assets/Hack3.jpeg';

const hackathons = [
  {
    id: '1',
    title: 'TensorFlow Global Hackathon',
    date: 'Oct 20-22, 2025',
    description: 'Build innovative ML solutions using TensorFlow. Open to teams from around the world with $10,000 in prizes.',
    image: hack1,
    status: 'registration-open',
    link: '#'
  },
  {
    id: '2',
    title: 'AI for Social Good Challenge',
    date: 'Nov 5-7, 2025',
    description: 'Develop solutions addressing UN Sustainable Development Goals using ML/AI technologies.',
    image: hack2,
    status: 'upcoming',
    link: '#'
  },
  {
    id: '3',
    title: 'TFUG Lucknow Annual ML Hackathon',
    date: 'Dec 10-12, 2025',
    description: 'Local hackathon focused on solving regional challenges using machine learning and AI.',
    image: hack3,
    status: 'upcoming',
    link: '#'
  },
];

export function HackathonsSection() {
  return (
    <Motion.div 
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-white">ML & AI Hackathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hackathon) => (
          <Motion.div
            key={hackathon.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 flex flex-col"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 overflow-hidden relative">
              <ImageWithFallback 
                src={hackathon.image}
                alt={hackathon.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 m-3">
                {hackathon.status === 'registration-open' ? (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Registration Open
                  </span>
                ) : (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    Upcoming
                  </span>
                )}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-medium text-white mb-2">{hackathon.title}</h3>
              <div className="flex items-center text-gray-400 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{hackathon.date}</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm">{hackathon.description}</p>
              
              {/* Registration button for the first hackathon */}
              {hackathon.status === 'registration-open' && (
                <a 
                  href="#register" 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-center font-medium py-2 rounded-md mb-4 transition-colors"
                >
                  <span className="text-white font-bold">Register Now</span>
                </a>
              )}
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center text-gray-400">
                  <Code className="h-4 w-4 mr-2" />
                  <span className="text-sm">Challenge</span>
                </div>
                <a 
                  href={hackathon.link} 
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-1 text-sm">Details</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <a 
          href="#" 
          className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-6 py-2 rounded-md flex items-center transition-colors"
        >
          <Trophy className="h-4 w-4 mr-2 text-white" />
          <span className="font-medium text-white">See past hackathon results</span>
        </a>
      </div>
    </Motion.div>
  );
}
