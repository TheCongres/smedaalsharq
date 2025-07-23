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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* NAJEEN Services */}
          <Card id="najeen" className="overflow-hidden group">
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <img 
                  src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/n.png" 
                  alt="NAJEEN Safety Services" 
                  className="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t('najeen.category')}
                </div>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <h3 className="text-xl lg:text-2xl font-bold text-foreground rtl:leading-loose">{t('najeen.title')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base text-center rtl:text-center rtl:leading-loose">
                {t('najeen.description')}
              </p>
              
              <Link to="/najeen">
                <Button className="w-full text-sm lg:text-base">
                  {t('services.explore')} {t('najeen.title')}
                </Button>
              </Link>
            </div>
          </Card>

          {/* SDOOD Services */}
          <Card id="sdood" className="overflow-hidden group">
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <img 
                  src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/s.png" 
                  alt="SDOOD Construction Services" 
                  className="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t('sdood.category')}
                </div>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <DoorOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <h3 className="text-xl lg:text-2xl font-bold text-foreground rtl:leading-loose">{t('sdood.title')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base text-center rtl:text-center rtl:leading-loose">
                {t('sdood.description')}
              </p>

              <Link to="/sdood">
                <Button className="w-full text-sm lg:text-base">
                  {t('services.explore')} {t('sdood.title')}
                </Button>
              </Link>
            </div>
          </Card>

          {/* RAMMAZ Services */}
          <Card id="rammaz" className="overflow-hidden group">
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <img 
                  src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/r.png" 
                  alt="RAMMAZ Digital Services" 
                  className="w-full h-full object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t('rammaz.category')}
                </div>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <h3 className="text-xl lg:text-2xl font-bold text-foreground rtl:leading-loose">{t('rammaz.title')}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base text-center rtl:text-center rtl:leading-loose">
                {t('rammaz.description')}
              </p>

              <Link to="/rammaz">
                <Button className="w-full text-sm lg:text-base">
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