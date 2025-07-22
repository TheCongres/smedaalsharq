
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t('contact.getInTouch')}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t('contact.description')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('contact.address')}</h3>
                    <p className="text-muted-foreground">
                      {t('contact.country')}<br />
                      {t('contact.region')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('contact.phone')}</h3>
                    <p className="text-muted-foreground">
                      +966 XX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('contact.email')}</h3>
                    <p className="text-muted-foreground">
                      info@smedaalsharq.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('contact.hours')}</h3>
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
              <h2 className="text-xl font-semibold text-foreground mb-6">
                {t('contact.sendMessage')}
              </h2>
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
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t('contact.selectService')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="najeen">{t('contact.serviceOptions.najeen')}</SelectItem>
                      <SelectItem value="sdood">{t('contact.serviceOptions.sdood')}</SelectItem>
                      <SelectItem value="rammaz">{t('contact.serviceOptions.rammaz')}</SelectItem>
                      <SelectItem value="multiple">{t('contact.serviceOptions.multiple')}</SelectItem>
                      <SelectItem value="other">{t('contact.serviceOptions.other')}</SelectItem>
                    </SelectContent>
                  </Select>
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
