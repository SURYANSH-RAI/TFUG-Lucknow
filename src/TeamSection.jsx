import { motion } from 'motion/react';
import { Users, Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';

const teamMembers = [
    {
        id: '1',
        name: 'Prashant Shukla',
        role: 'Organizer',
        bio: 'ML Engineer at TCS | Organizer TFUG Lucknow | Lucknow | Jaro',
        avatar: 'src/assets/prashant.jpeg',
        links: {
            linkedin: 'https://www.linkedin.com/in/prashant-shukla30/',
            /* twitter: 'https://twitter.com/username', */
            github: 'https://github.com/PrashantShuklaa'
        }
    },
    {
        id: '2',
        name: 'Ankit',
        role: 'Co-Organizer',
        bio: 'Senior Research -Engineer | Co-Organizer TFUG Lucknow',
        avatar: 'src/assets/ankit.jpeg',
        links: {
            linkedin: 'https://www.linkedin.com/in/aadityaura/',
            /* twitter: 'https://twitter.com/username', */     
            github: 'https://github.com/monk1337'
        }
    },
];

export function TeamSection() {
  return (
    <motion.div 
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-white">Our Team</h2>
        <div className="flex items-center mt-3 md:mt-0">
          <a 
            href="https://github.com/LucknowAI" 
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <Github className="h-4 w-4 mr-1.5" />
            <span>Join us on GitHub</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-5">
              <div className="flex items-center mb-4">
                <ImageWithFallback
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
              
              <div className="flex space-x-3">
                <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-sm">in</span>
                  </div>
                </a>
                {/*
                <a href={member.links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-sm">𝕏</span>
                  </div>
                </a>
                */}
                <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <Github className="h-4 w-4" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a
          href="https://https//chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
          className="inline-flex items-center justify-center bg-[#1a1a1a] border border-gray-700 text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition-colors"
        >
          <Users className="h-4 w-4 mr-2" />
          <span>Join Our Community</span>
        </a>
      </div>
    </motion.div>
  );
}
