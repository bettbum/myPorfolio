/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from 'app/i18n';

export default async function Home({ params: { lng = 'en' } }) {
  const { t } = await useTranslation(lng);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-[32px]">{t('greet')}</div>
      <br />
    </main>
  );
}
