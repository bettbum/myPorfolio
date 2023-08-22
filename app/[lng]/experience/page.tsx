/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "@/app/i18n";
import Blog from "@/components/Blog";

export default async function Page({ params: { lng = 'en' } }) {
  const { t } = await useTranslation(lng, 'experience');
  const data = {
    title: 'AddC Labs Technology - 2023',
    subtitle: t('title'),
    content: t('addc_desc'),
  };
  return <Blog {...data} />;
}
