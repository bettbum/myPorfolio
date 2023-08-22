/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "@/app/i18n";
import Blog from "@/components/Blog";

export default async function Page({ params: { lng = 'en' } }) {
  const { t } = await useTranslation(lng, 'education');
  const data = {
    title: t('lasalle_college'),
    subtitle: t('major'),
    content: t('description_lasalle'),
  };
  return <Blog {...data} />;
}
