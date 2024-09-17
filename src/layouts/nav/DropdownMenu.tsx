// DropdownMenu.tsx
import React, { useState } from 'react';

type DropdownMenuProps = {
  onProfileClick: () => void;
  onBookingClick: () => void;
  onLogoutClick: () => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onProfileClick, onBookingClick, onLogoutClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleItemClick = (action: 'profile' | 'booking' | 'logout') => {
    setIsOpen(false);
    switch (action) {
      case 'profile':
        onProfileClick();
        break;
      case 'booking':
        onBookingClick();
        break;
      case 'logout':
        onLogoutClick();
        break;
    }
  };

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={toggleMenu}
      >
        <img
          src="/path-to-your-icon/person-icon.png" // Replace with your icon path
          alt="User"
          className="w-8 h-8"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleItemClick('profile')}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleItemClick('booking')}
              >
                Lịch sử booking
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleItemClick('logout')}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
