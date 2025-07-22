
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Database, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Rammaz = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t('rammaz.services.web'),
      description: t('rammaz.services.web.description')
    },
    {
      icon: Smartphone,
      title: t('rammaz.services.mobile'),
      description: t('rammaz.services.mobile.description')
    },
    {
      icon: Database,
      title: t('rammaz.services.systems'),
      description: t('rammaz.services.systems.description')
    },
    {
      icon: Lightbulb,
      title: t('rammaz.services.consultation'),
      description: t('rammaz.services.consultation.description')
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section with Integrated Logo */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left mb-6">
                <p className="text-sm sm:text-base text-primary font-medium mb-2">
                  {t('rammaz.category')}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {t('pages.rammaz')}
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 mb-6"></div>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed text-center lg:text-left">
                {t('rammaz.fullDescription')}
              </p>
              <div className="text-center lg:text-left">
                <Link to="/contact">
                  <Button size="lg" className="px-6 sm:px-8">
                    {t('contact.title')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/r.png" 
                alt="RAMMAZ Digital Solutions" 
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('rammaz.services.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 lg:mb-6">
            {t('rammaz.cta.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto">
            {t('rammaz.cta.description')}
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-6 sm:px-8">
              {t('rammaz.cta.button')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rammaz;
