import { motion as Motion } from 'motion/react';
import { Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

const upcomingEvents = [
  {
    id: '1',
    title: 'TensorFlow Dev Summit 2025',
    date: 'Sept 15, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Lucknow IT Park',
    image: image1,
    attendees: 87
  },
  {
    id: '2',
    title: 'ML Workshop Series: Intro to Neural Networks',
    date: 'Sept 22, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'Virtual',
    image: image2,
    attendees: 54
  },
  {
    id: '3',
    title: 'AI in Healthcare: Open Discussion',
    date: 'Oct 5, 2025',
    time: '11:00 AM - 1:00 PM',
    location: 'Collab Space, Lucknow',
    image: image3,
    attendees: 32
  },
];

export function EventsSection() {
  return (
    <Motion.div 
      className="py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-white">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <Motion.div
            key={event.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 flex flex-col"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 overflow-hidden">
              <ImageWithFallback 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-medium mb-2 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #f97316, #facc15)' }}>{event.title}</h3>
              <div className="flex items-center text-gray-400 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{event.date} • {event.time}</span>
              </div>
              <p className="text-gray-300 mb-4">📍 {event.location}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.attendees} attending</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm">
                  RSVP
                </button>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center">
          <span>View all events</span>
          <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Motion.div>
  );
}
