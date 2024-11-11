import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaVideo } from 'react-icons/fa';
import { useApi } from '../hooks/useApi';
import { ClassDetails } from '../types';

const JoinClassesPage: React.FC = () => {
  const [classes, setClasses] = useState<ClassDetails[]>([]);
  const { request } = useApi();

  useEffect(() => {
    // Mock data fetching - replace with actual API call
    const mockClasses: ClassDetails[] = [
      {
        id: '1',
        title: 'Zumba Beginner Class',
        instructor: 'Alice Johnson',
        schedule: 'Monday & Wednesday, 6:00 PM - 7:00 PM',
        meetingLink: 'https://meet.google.com/example'
      },
      {
        id: '2',
        title: 'Advanced Hip-Hop',
        instructor: 'Mark Davis',
        schedule: 'Friday, 5:00 PM - 6:30 PM',
        meetingLink: 'https://zoom.us/example'
      },
      {
        id: '3',
        title: 'Morning Yoga Flow',
        instructor: 'Sarah Lee',
        schedule: 'Tuesday & Thursday, 8:00 AM - 9:00 AM',
        meetingLink: 'https://meet.google.com/example2'
      }
    ];
    setClasses(mockClasses);
  }, []);

  const handleJoinClass = (meetingLink: string) => {
    window.open(meetingLink, '_blank');
  };

  return (
    <div className="join-classes-page min-h-screen pb-20">
      <div className="classes-feed grid gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-semibold text-2xl mb-2">{classItem.title}</h2>
            <p className="text-gray-600 mb-1">Instructor: {classItem.instructor}</p>
            <div className="flex items-center text-gray-600 mb-4">
              <FaCalendarAlt className="mr-2" />
              <span>{classItem.schedule}</span>
            </div>
            <button
              onClick={() => handleJoinClass(classItem.meetingLink)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center gap-2"
            >
              <FaVideo />
              Join Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinClassesPage;