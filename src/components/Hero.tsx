
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center px-4">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
            language === 'ar' ? 'leading-relaxed pb-2' : ''
          }`}
          style={language === 'ar' ? { 
            lineHeight: '1.3',
            paddingBottom: '0.5rem',
            color: 'hsl(var(--primary))'
          } : {}}
          >
            {t('company.name')}
          </h1>
          <h2 className={`text-xl md:text-3xl lg:text-4xl mb-8 text-foreground/90 font-semibold ${
            language === 'ar' ? 'leading-relaxed' : ''
          }`}>
            {t('company.subtitle')}
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            {t('hero.description')}
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.exploreServices')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
