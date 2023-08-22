/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from '@/app/i18n';
import Blog from '@/components/Blog';

export default async function Page({ params: { lng = 'en' } }) {
  const { t } = await useTranslation(lng, 'about-me');
  const data = {
    title: 'Thi Hong Phuc Nguyen',
    subtitle: t('title'),
    content: t('description'),
  };
  return <Blog {...data}/>;
}
