import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import './AboutSection.css';

export function AboutSection() {
  return (
    <motion.div 
      className="bg-[#1a1a1a] text-white p-6 rounded-lg text-left border border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-4">Who we are</h2>
      <div className="space-y-4 text-gray-300">
        <h3 className="text-lg font-medium text-white">
          Unlock the Power of AI/ML with TensorFlow User Group Lucknow
        </h3>
        <p className="leading-relaxed">
          Welcome to the vibrant community of technology enthusiasts dedicated to exploring the boundless possibilities of Artificial Intelligence and Machine Learning. At TensorFlow User Group Lucknow, we are passionate about collaborative learning, knowledge sharing, and innovation.
        </p>
        <p className="leading-relaxed">
          Our group brings together students, professionals, and industry experts to engage in thought-provoking discussions, hands-on workshops, and insightful presentations. Through this collaborative environment, we aim to empower individuals, accelerate learning, and drive the adoption of cutting-edge AI/ML technologies.
        </p>
        <div className="space-y-3">
          <p className="font-medium text-white">Join us on this exciting journey as we:</p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Explore the latest advancements in AI/ML and its applications across various domains</li>
            <li>Engage with experienced practitioners and learn from their real-world expertise</li>
            <li>Collaborate on projects, share ideas, and elevate each other's skills</li>
            <li>Participate in coding challenges, hackathons, and community-driven initiatives</li>
            <li>Network with like-minded individuals and forge lasting connections</li>
          </ul>
        </div>
        <p className="leading-relaxed">
          Together, we can unlock the true potential of AI/ML and contribute to the ever-evolving technological landscape. Let's embark on this transformative journey and create a future where innovation knows no bounds.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-6">
          "Alone, we can do so little; together, we can do so much." - Helen Keller
        </blockquote>
        <div className="space-y-2">
          <p className="font-medium text-white">Stay connected:</p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Discord:</span>
              <a 
                href="https://https://discord.gg/RamPfb5T" 
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Let's Connect on Discord</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">WhatsApp:</span>
              <a 
                href="https://https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" 
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Join Now</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-800">
          <p className="text-sm">
            <span className="font-medium">Mandatory Disclaimer:</span> TensorFlow User Group Lucknow is an independent community; our activities and opinions expressed here show no way linked or influenced by Google, the corporation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
