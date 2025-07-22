import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('contact.getInTouch')}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('contact.address')}</h4>
                  <p className="text-muted-foreground">
                    Saudi Arabia<br />
                    Eastern Province
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('contact.phone')}</h4>
                  <p className="text-muted-foreground">
                    +966 XX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('contact.email')}</h4>
                  <p className="text-muted-foreground">
                    info@smedaalsharq.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('contact.hours')}</h4>
                  <p className="text-muted-foreground">
                    {t('contact.hoursText').split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index === 0 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t('contact.sendMessage')}
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('contact.firstName')}
                  </label>
                  <Input placeholder={t('contact.firstName')} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('contact.lastName')}
                  </label>
                  <Input placeholder={t('contact.lastName')} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t('contact.email')}
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t('contact.serviceInterest')}
                </label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service</option>
                  <option value="najeen">NAJEEN - Safety Solutions</option>
                  <option value="sdood">SDOOD - Doors & Security</option>
                  <option value="both">Both Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t('contact.message')}
                </label>
                <Textarea 
                  placeholder={t('contact.messagePlaceholder')}
                  rows={5}
                />
              </div>

              <Button className="w-full">
                {t('contact.submit')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;