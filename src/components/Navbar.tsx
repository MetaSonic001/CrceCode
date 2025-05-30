'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Bell, User, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Lessons', path: '/lessons' },
    { name: 'Problems', path: '/problems' },
    { name: 'Contests', path: '/contests' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Profile', path: '/profile' }
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">CrceCode</span>
            </Link>

            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === link.path
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                className="hidden sm:flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <User className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 bg-white dark:bg-gray-800">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.path
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Footer columns */}
            {/* Repeat similar to above */}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              © 2024 CrceCode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
