import { Seo } from '@/components/common/Seo/Seo';
import { VerifyAccount } from '@/features/auth/components/VerifyAccount';
import { useTranslations } from "@/hooks/useTranslation";

export default function EmailVerificationPage() {
  const { t } = useTranslations('auth');
  return (
    <>
      <Seo title={t('verification.title')} description={t('verification.title')} />
      <div className="">
        <VerifyAccount />
      </div>
    </>
  )
}
