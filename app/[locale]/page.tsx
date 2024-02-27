import { useTranslations } from 'next-intl';

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
