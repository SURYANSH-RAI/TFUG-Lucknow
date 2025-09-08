import './CommunityLeaders.css';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/ImageWithFallback';

const communityLeaders = [
  {
        id: '1',
        name: 'Prashant Shukla',
        /* 
        username: '--',
        title: '--',
        */
        avatar: 'src/assets/prashant.jpeg',
            },
    {
        id: '2',
        name: 'Ankit',
        /* 
        username: '--',
        title: '--',
        */
        avatar: 'src/assets/ankit.jpeg',
        },
];

export function CommunityLeaders() {
  return (
    <motion.div 
      className="bg-[#1a1a1a] text-white p-6 rounded-lg border border-gray-800"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Community Leaders</h2>
      <div className="space-y-4">
        {communityLeaders.map((leader, index) => (
          <motion.div
            key={leader.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 my-3">
              <ImageWithFallback
                src={leader.avatar}
                alt={leader.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-medium text-white truncate">{leader.name}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">{leader.username}</p>
              <p className="text-sm text-gray-300 leading-snug">{leader.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
