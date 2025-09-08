import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactUsSection() {
  return (
    <motion.div 
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-4 text-white">Contact Us</h2>
      <p className="text-gray-300 mb-8 max-w-3xl">
        Have questions about TFUG Lucknow or want to join our community? We'd love to hear from you! 
        Fill out the form below or reach out via email or social media.
      </p>
      
      {/* Community information banner */}
      <motion.div 
        className="mb-8 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-800/50 rounded-lg p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-medium text-white mb-3">Join Our Community</h3>
        <p className="text-gray-200 mb-4">
          TFUG Lucknow welcomes developers, data scientists, researchers, students, and enthusiasts interested in machine learning and TensorFlow.
          We host regular meetups, workshops, hackathons, and collaborative projects.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="bg-[#1a1a1a]/80 px-4 py-3 rounded-lg">
            <h4 className="text-white font-medium">1200+</h4>
            <p className="text-sm text-gray-400">Community Members</p>
          </div>
          <div className="bg-[#1a1a1a]/80 px-4 py-3 rounded-lg">
            <h4 className="text-white font-medium">11</h4>
            <p className="text-sm text-gray-400">Events Per Year</p>
          </div>
          <div className="bg-[#1a1a1a]/80 px-4 py-3 rounded-lg">
            <h4 className="text-white font-medium">15+</h4>
            <p className="text-sm text-gray-400">Expert Speakers</p>
          </div>
          <div className="bg-[#1a1a1a]/80 px-4 py-3 rounded-lg">
            <h4 className="text-white font-medium">2</h4>
            <p className="text-sm text-gray-400">Annual Hackathons</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div 
          className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-6"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-medium text-white mb-6">Get in Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-blue-400 mt-1 mr-3" />
              <div>
                <p className="text-white font-medium">Email</p>
                <a href="mailto:tfug.lucknow@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  tfug.lucknow@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-blue-400 mt-1 mr-3" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <a href="tel:+91-9876543210" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91-9876543210
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-3" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-300">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-white font-medium mb-3">Connect with us</h4>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
              </a>
              {/* Twitter/X */}
              <a href="https://x.com/TFUGlucknow" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">𝕏</span>
                </div>
              </a>
              {/* WhatsApp */}
              <a href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5l-.8 3c-.2.7.5 1.4 1.2 1.2l3-.8c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-2.4.6.6-2.4-.2-.3c-.8-1.3-1.2-2.8-1.2-4.4 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.7-5.3c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.1.2-.6.7-.7.9-.1.1-.3.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4 0-.1 0-.3-.1-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.8.7-.8 1.8s.8 2.1.9 2.2c.1.1 1.4 2.2 3.5 3.1.5.2.9.3 1.2.4.5.2 1 .2 1.3.1.4-.1 1.3-.5 1.5-1s.2-1 .1-1.1c-.1-.1-.3-.2-.5-.3z"/>
                  </svg>
                </div>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/aicommunitylucknow/" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6-9a1 1 0 100-2 1 1 0 000 2zm-11.5-1c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1zm7.5-3c-1.1 0-1.4 0-3.1.1-2.1.1-3.8 1.8-3.9 3.9-.1 1.7-.1 2-.1 3.1s0 1.4.1 3.1c.1 2.1 1.8 3.8 3.9 3.9 1.7.1 2 .1 3.1.1s1.4 0 3.1-.1c2.1-.1 3.8-1.8 3.9-3.9.1-1.7.1-2 .1-3.1s0-1.4-.1-3.1c-.1-2.1-1.8-3.8-3.9-3.9-1.7-.1-2-.1-3.1-.1zm0-2c4.4 0 5 0 6.8.1 1.6.1 2.9.4 3.9 1.4 1 1 1.3 2.3 1.4 3.9.1 1.8.1 2.4.1 6.8s0 5-.1 6.8c-.1 1.6-.4 2.9-1.4 3.9-1 1-2.3 1.3-3.9 1.4-1.8.1-2.4.1-6.8.1s-5 0-6.8-.1c-1.6-.1-2.9-.4-3.9-1.4-1-1-1.3-2.3-1.4-3.9-.1-1.8-.1-2.4-.1-6.8s0-5 .1-6.8c.1-1.6.4-2.9 1.4-3.9 1-1 2.3-1.3 3.9-1.4 1.8-.1 2.4-.1 6.8-.1z"/>
                  </svg>
                </div>
              </a>
              {/* Commudle */}
              <a href="https://www.commudle.com/communities/tfug-lucknow" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Co</span>
                </div>
              </a>
              {/* Discord */}
              <a href="https://discord.com/channels/1165604190475792434/1165604190475792436" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 00-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-6"
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-medium text-white mb-6">Map</h3>
          
          <div className="w-full h-80 rounded-md overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973526778!2d80.75451382761826!3d26.848830442449223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1694155983541!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lucknow Map"
              className="rounded-md"
            ></iframe>
          </div>
          
          <div className="mt-4 text-gray-300 text-sm">
            <p>TFUG Lucknow hosts events and meetups across various locations in Lucknow. Check our social media channels for specific event venues.</p>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div
        className="mt-12 bg-[#1a1a1a] rounded-lg border border-gray-800 p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <h4 className="text-white font-medium">How can I join TFUG Lucknow?</h4>
            <p className="text-gray-300 text-sm">You can join our community by attending our meetups, joining our Discord server, or following us on social media. All our events are free and open to everyone interested in TensorFlow and ML.</p>
          </div>
          
          <div className="space-y-1.5">
            <h4 className="text-white font-medium">Do I need to have experience with TensorFlow?</h4>
            <p className="text-gray-300 text-sm">Not at all! Our community welcomes members at all skill levels, from beginners to experts. We host events for different experience levels.</p>
          </div>
          
          <div className="space-y-1.5">
            <h4 className="text-white font-medium">Can I present my ML project at a meetup?</h4>
            <p className="text-gray-300 text-sm">Absolutely! We encourage community members to present their projects. Contact us with your proposal, and we'll schedule you for an upcoming meetup.</p>
          </div>
          
          <div className="space-y-1.5">
            <h4 className="text-white font-medium">Are there any sponsorship opportunities?</h4>
            <p className="text-gray-300 text-sm">Yes, we welcome sponsors who want to support the ML community in Lucknow. Please contact us for more information about sponsorship packages.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
