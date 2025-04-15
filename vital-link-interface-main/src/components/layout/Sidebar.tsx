
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  UserRound, 
  FlaskConical, 
  Stethoscope, 
  ShieldCheck, 
  HelpCircle,
  CalendarClock
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Home', icon: <Home size={20} />, path: '/' },
    { name: 'Doctors', icon: <UserRound size={20} />, path: '/doctors' },
    { name: 'Laboratories', icon: <FlaskConical size={20} />, path: '/laboratories' },
    { name: 'Specialties', icon: <Stethoscope size={20} />, path: '/specialties' },
    { name: 'Insurance', icon: <ShieldCheck size={20} />, path: '/insurance' },
    { name: 'Help', icon: <HelpCircle size={20} />, path: '/help' },
  ];

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b">
        <h2 className="text-xl font-bold text-hospital-primary">Menu</h2>
        <button 
          onClick={onClose} 
          className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-hospital-primary text-white' 
                    : 'text-gray-700 hover:bg-hospital-background hover:text-hospital-primary'
                }`}
                onClick={() => onClose()}
              >
                <span className={location.pathname === item.path ? 'text-white' : 'text-gray-500'}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <Link 
          to="/appointments"
          className="flex items-center justify-center w-full py-2 px-4 bg-hospital-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
          onClick={onClose}
        >
          <CalendarClock size={20} className="mr-2" />
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
