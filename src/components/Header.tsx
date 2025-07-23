
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.najeen'), href: '/najeen' },
    { label: t('nav.sdood'), href: '/sdood' },
    { label: t('nav.rammaz'), href: '/rammaz' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          {/* Logo Only */}
          <div className="flex items-center">
            <Link to="/" className="p-2">
              <img 
                src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/fin.png" 
                alt={t('company.name')} 
                className="h-20 w-auto max-w-80 sm:h-28 sm:max-w-[400px]" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <nav className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher onLanguageChange={() => setIsMenuOpen(false)} />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-3 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-2">
              <LanguageSwitcher onLanguageChange={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
