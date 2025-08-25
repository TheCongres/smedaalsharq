
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, DoorOpen, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'najeen',
      title: t('najeen.title'),
      description: t('najeen.description'),
      category: t('najeen.category'),
      icon: Shield,
      image: 'https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/n.png',
      alt: 'NAJEEN Safety Services',
      link: '/najeen'
    },
    {
      id: 'sdood',
      title: t('sdood.title'),
      description: t('sdood.description'),
      category: t('sdood.category'),
      icon: DoorOpen,
      image: 'https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/s.png',
      alt: 'SDOOD Construction Services',
      link: '/sdood'
    },
    {
      id: 'rammaz',
      title: t('rammaz.title'),
      description: t('rammaz.description'),
      category: t('rammaz.category'),
      icon: Monitor,
      image: 'https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/r.png',
      alt: 'RAMMAZ Digital Services',
      link: '/rammaz'
    }
  ];

  const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <Card id={service.id} className="overflow-hidden group">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={service.image}
          alt={service.alt}
          className="w-full h-48 md:h-56 lg:h-64 object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {service.category}
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
          <service.icon className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <Link to={service.link}>
          <Button className="w-full">
            {t('services.explore')} {service.title}
          </Button>
        </Link>
      </div>
    </Card>
  );

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

        {/* Carousel for mobile and tablet, Grid for desktop */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2">
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Grid layout for desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
