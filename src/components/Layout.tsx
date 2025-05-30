
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Bell, User, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

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
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">CrceCode</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                className="hidden sm:flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language}</span>
              </Button>

              {/* Theme Toggle */}
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

              {/* Notifications */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>

              {/* User Avatar */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="hidden sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <User className="w-5 h-5" />
              </Button>

              {/* Mobile Menu Toggle */}
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 bg-white dark:bg-gray-800">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.path
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

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link></li>
                <li><Link href="/features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Features</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Help</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/careers" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
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

export default Layout;
