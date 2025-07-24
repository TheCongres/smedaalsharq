

import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col items-start mb-4">
              <div className="rounded-lg px-1 border border-footer-foreground/10 hover:border-footer-foreground/20 bg-white transition-all duration-300">
                <img 
                  src="https://raw.githubusercontent.com/TheCongres/imgs-for-smedaa/main/hh.png" 
                  alt={t('company.name')} 
                  className="h-20 w-auto max-w-60 sm:h-22 sm:max-w-76 md:h-22 md:max-w-88 lg:h-24 lg:max-w-[400px] transition-all duration-300 hover:scale-102" 
                />
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/najeen" className="hover:opacity-100 transition-opacity">
                  {t('najeen.title')} - {t('najeen.category')}
                </Link>
              </li>
              <li>
                <Link to="/sdood" className="hover:opacity-100 transition-opacity">
                  {t('sdood.title')} - {t('sdood.category')}
                </Link>
              </li>
              <li>
                <Link to="/rammaz" className="hover:opacity-100 transition-opacity">
                  {t('rammaz.title')} - {t('rammaz.category')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100 transition-opacity">
                  {t('footer.consultation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>{t('contact.location')}</p>
              <p>{t('contact.phone')}: {t('contact.phoneNumber')}</p>
              <p>{t('contact.email')}: {t('contact.emailAddress')}</p>
              <p>
                {t('footer.businessHours')}<br />
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

        <Separator className="my-8 bg-footer-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

