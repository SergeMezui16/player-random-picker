import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Index({
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // unstable_setRequestLocale(params.locale);
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}
