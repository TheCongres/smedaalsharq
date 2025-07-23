import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, FileSearch, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Najeen = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: t('najeen.services.safety'),
      description: t('najeen.services.safety.description')
    },
    {
      icon: Users,
      title: t('najeen.services.training'),
      description: t('najeen.services.training.description')
    },
    {
      icon: FileSearch,
      title: t('najeen.services.assessment'),
      description: t('najeen.services.assessment.description')
    },
    {
      icon: Wrench,
      title: t('najeen.services.consultation'),
      description: t('najeen.services.consultation.description')
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section with Integrated Logo */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 rtl:lg:order-2">
              <div className="text-center lg:text-start rtl:lg:text-end mb-6">
                <p className="text-sm sm:text-base text-primary font-medium mb-2">
                  {t('najeen.category')}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight rtl:leading-loose">
                  {t('pages.najeen')}
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto lg:me-0 lg:ms-0 rtl:lg:me-0 rtl:lg:ms-auto mb-6"></div>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed text-center lg:text-start rtl:lg:text-right rtl:leading-loose">
                {t('najeen.fullDescription')}
              </p>
              <div className="flex justify-center lg:justify-start rtl:lg:justify-end rtl:justify-end">
                <Link to="/contact">
                  <Button size="lg" className="px-6 sm:px-8">
                    {t('contact.title')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 rtl:lg:order-1 flex justify-center items-center h-[280px] sm:h-[320px] lg:h-[380px]">
              <div className="flex justify-center items-center w-full h-full p-4">
                <img 
                  src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/n.png" 
                  alt="NAJEEN Safety Solutions" 
                  className="max-w-[280px] max-h-[280px] sm:max-w-[320px] sm:max-h-[320px] md:max-w-[360px] md:max-h-[360px] lg:max-w-[400px] lg:max-h-[400px] object-contain transition-all duration-300 hover:scale-105 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('najeen.services.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors group-hover:bg-primary/20">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 rtl:leading-loose">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed rtl:leading-loose text-center rtl:text-right">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 lg:mb-6 rtl:text-right">
            {t('najeen.cta.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto rtl:text-right">
            {t('najeen.cta.description')}
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-6 sm:px-8">
              {t('najeen.cta.button')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Najeen;
