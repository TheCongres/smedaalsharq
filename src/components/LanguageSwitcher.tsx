
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageSwitcherProps {
  onLanguageChange?: () => void;
}

const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    onLanguageChange?.();
  };

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className="flex items-center space-x-1 px-3 py-2 rtl:space-x-reverse"
      >
        <img 
          src="https://flagcdn.com/w2560/us.png"
          alt="USA Flag"
          className="w-5 h-4 rounded-sm border border-gray-300 object-cover"
          loading="lazy"
          decoding="async"
        />
        <span className="text-xs font-medium">EN</span>
      </Button>
      <Button
        variant={language === 'ar' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('ar')}
        className="flex items-center space-x-1 px-3 py-2 rtl:space-x-reverse"
      >
        <img 
          src="https://flagcdn.com/w2560/sa.png"
          alt="Saudi Arabia Flag"
          className="w-5 h-4 rounded-sm border border-gray-300 object-cover"
          loading="lazy"
          decoding="async"
        />
        <span className="text-xs font-medium">AR</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
