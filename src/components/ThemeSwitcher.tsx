import React, { useState } from 'react';
import { Palette, Sparkles, Eye, Minimize, Heart, Zap } from 'lucide-react';
import { useTheme, ThemeMode } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'classic' as ThemeMode,
      name: 'Classic Space',
      icon: <Sparkles size={16} />,
      description: 'Purple cosmic gradient',
      preview: 'bg-gradient-to-r from-blue-500 to-purple-600'
    },
    {
      id: 'darkGalaxy' as ThemeMode,
      name: 'Dark Galaxy',
      icon: <Eye size={16} />,
      description: 'Deep space darkness',
      preview: 'bg-gradient-to-r from-black to-blue-900'
    },
    {
      id: 'nebula' as ThemeMode,
      name: 'Nebula Mode',
      icon: <Sparkles size={16} />,
      description: 'Vibrant cosmic swirls',
      preview: 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
    },
    {
      id: 'aurora' as ThemeMode,
      name: 'Aurora Mode',
      icon: <Zap size={16} />,
      description: 'Northern lights glow',
      preview: 'bg-gradient-to-r from-green-400 to-blue-500'
    },
    {
      id: 'sunsetCosmos' as ThemeMode,
      name: 'Sunset Cosmos',
      icon: <Heart size={16} />,
      description: 'Cosmic sunset vibes',
      preview: 'bg-gradient-to-r from-orange-500 via-red-500 to-purple-600'
    },
    {
      id: 'dreamyPastel' as ThemeMode,
      name: 'Dreamy Pastel',
      icon: <Minimize size={16} />,
      description: 'Soft blurry galaxy',
      preview: 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300'
    }
  ];

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="relative">
        {/* Theme Switcher Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-gray-800/80 backdrop-blur-md border border-purple-500/30 rounded-full hover:border-purple-500/50 transition-all duration-300 hover:scale-110 group"
          title="Change Theme"
        >
          <Palette className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={20} />
        </button>

        {/* Theme Options Panel */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <h3 className="text-white font-semibold mb-3 text-center">Choose Your Style</h3>
            
            <div className="grid gap-2">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => {
                    setTheme(themeOption.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    theme === themeOption.id
                      ? 'bg-purple-500/30 border border-purple-400/50'
                      : 'bg-gray-800/50 hover:bg-gray-700/50 border border-transparent'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full ${themeOption.preview} flex items-center justify-center`}>
                    {themeOption.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-medium text-sm">{themeOption.name}</div>
                    <div className="text-gray-400 text-xs">{themeOption.description}</div>
                  </div>
                  {theme === themeOption.id && (
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;