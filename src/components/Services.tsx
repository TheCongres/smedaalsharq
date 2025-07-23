
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, DoorOpen, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* NAJEEN Services */}
          <Card id="najeen" className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/n.png" 
                alt="NAJEEN Safety Services" 
                className="w-full h-48 md:h-56 lg:h-64 object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t('najeen.category')}
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{t('najeen.title')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('najeen.description')}
              </p>
              
              <Link to="/najeen">
                <Button className="w-full">
                  {t('services.explore')} {t('najeen.title')}
                </Button>
              </Link>
            </div>
          </Card>

          {/* SDOOD Services */}
          <Card id="sdood" className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/s.png" 
                alt="SDOOD Construction Services" 
                className="w-full h-48 md:h-56 lg:h-64 object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t('sdood.category')}
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <DoorOpen className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{t('sdood.title')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('sdood.description')}
              </p>

              <Link to="/sdood">
                <Button className="w-full">
                  {t('services.explore')} {t('sdood.title')}
                </Button>
              </Link>
            </div>
          </Card>

          {/* RAMMAZ Services */}
          <Card id="rammaz" className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/r.png" 
                alt="RAMMAZ Digital Services" 
                className="w-full h-48 md:h-56 lg:h-64 object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t('rammaz.category')}
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Monitor className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{t('rammaz.title')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('rammaz.description')}
              </p>

              <Link to="/rammaz">
                <Button className="w-full">
                  {t('services.explore')} {t('rammaz.title')}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
