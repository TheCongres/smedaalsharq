
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    t('about.achievements.innovation'),
    t('about.achievements.solutions'), 
    t('about.achievements.quality'),
    t('about.achievements.presentation')
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              {t('about.companyName')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.companyDescription')}
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-muted">
              <h4 className="text-xl font-semibold text-primary mb-4">{t('about.mission')}</h4>
              <p className="text-muted-foreground mb-6">
                {t('about.missionText')}
              </p>
              
              <h4 className="text-xl font-semibold text-primary mb-4">{t('about.vision')}</h4>
              <p className="text-muted-foreground">
                {t('about.visionText')}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
