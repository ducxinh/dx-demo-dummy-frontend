import { Seo } from '@/components/common/Seo/Seo';
import { Home } from '@/features/home-ecommerce/components/Home';
import { useTranslations } from '@/hooks/useTranslation';

const EcommerceDemoPage = () => {
  const { t } = useTranslations('ecommerce');
  return (
    <>
      <Seo title={t('title') as string} description={t('title') as string} />
      <div className="">
        <Home />
      </div>
    </>
  );
};

export default EcommerceDemoPage; 