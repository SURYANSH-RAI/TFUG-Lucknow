import { motion as Motion } from 'motion/react';
import { Code, Cpu, BarChart, Github, Star, ExternalLink, Globe } from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';

const communityProjects = [
  {
    id: '1',
    name: 'TensorFlow Image Classifier',
    description: 'A lightweight image classification library built on TensorFlow with support for transfer learning and model optimization.',
    tags: ['TensorFlow', 'Image Processing', 'ML'],
    stars: 56,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    repoUrl: 'https://github.com/username/repo'
  },
  {
    id: '2',
    name: 'NLP Preprocessing Toolkit',
    description: 'A collection of tools for natural language processing tasks including tokenization, stemming, and text cleaning.',
    tags: ['NLP', 'Text Processing', 'Python'],
    stars: 32,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    repoUrl: 'https://github.com/username/repo'
  },
  {
    id: '3',
    name: 'TensorFlow.js Dashboard',
    description: 'Interactive web dashboard for visualizing model performance and metrics using TensorFlow.js.',
    tags: ['TensorFlow.js', 'Web', 'Visualization'],
    stars: 78,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    repoUrl: 'https://github.com/username/repo'
  },
];

export function BuildsSection() {
  return (
    <Motion.div 
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-white">Community Builds</h2>
        <div className="flex items-center mt-3 md:mt-0">
          <a 
            href="#" 
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <Github className="h-4 w-4 mr-1.5" />
            <span>View all projects</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityProjects.map((project) => (
          <Motion.div
            key={project.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 flex flex-col"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 overflow-hidden">
              <ImageWithFallback 
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #f97316, #facc15)' }}>{project.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span className="text-sm">{project.stars}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-800 text-blue-400 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <a 
                  href={project.repoUrl} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4 mr-2 text-white" />
                  <span className="text-white">Preview</span>
                </a>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
      
      <div className="mt-10 bg-[#1a1a1a] rounded-lg border border-gray-800 p-6">
        <h3 className="text-xl font-medium text-white mb-4">Contribute to Our Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-600/20 p-3 rounded-full mb-3">
              <Code className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="text-white font-medium mb-2">Open Source</h4>
            <p className="text-gray-300 text-sm">All our community projects are open source and welcome contributions from developers of all skill levels.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-600/20 p-3 rounded-full mb-3">
              <Cpu className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="text-white font-medium mb-2">ML Focused</h4>
            <p className="text-gray-300 text-sm">Projects focusing on machine learning, AI, and TensorFlow implementations that solve real-world problems.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-600/20 p-3 rounded-full mb-3">
              <BarChart className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="text-white font-medium mb-2">Learn & Grow</h4>
            <p className="text-gray-300 text-sm">Perfect opportunity for learning, mentorship, and building your portfolio with impactful projects.</p>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
