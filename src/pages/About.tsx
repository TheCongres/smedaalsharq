import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Shield, Star, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: t('about.values.innovationText')
    },
    {
      icon: Shield,
      title: t('about.values.quality'),
      description: t('about.values.qualityText')
    },
    {
      icon: Star,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceText')
    },
    {
      icon: Users,
      title: t('about.values.integrity'),
      description: t('about.values.integrityText')
    }
  ];

  const achievements = [
    t('about.achievements.innovation'),
    t('about.achievements.solutions'),
    t('about.achievements.quality'),
    t('about.achievements.presentation')
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('pages.about')}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.companyDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('about.history.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('about.history.text')}
              </p>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-muted">
                <h3 className="text-2xl font-bold text-primary mb-6">{t('about.companyName')}</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">{t('about.mission')}</h4>
                  <p className="text-muted-foreground mb-6">
                    {t('about.missionText')}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4">{t('about.vision')}</h4>
                  <p className="text-muted-foreground">
                    {t('about.visionText')}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.values.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
