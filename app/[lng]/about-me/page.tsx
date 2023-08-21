/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from '@/app/i18n';

export default async function Page({ params: { lng = 'en' } }) {
  const { t } = await useTranslation(lng, 'about-me');
  return (
    <div className="flex flex-row my-[100px] ml-[500px] h-1/2">
      <div className="w-5/6 text-right">
        <p className="text-4xl font-bold text-neutral mb-[5px]">
          Thi Hong Phuc Nguyen
        </p>
        <p className="text-2xl font-thin text-neutral mb-[10px]">
          {t('title')}
        </p>
        <p className="text-lg text-neutral">{t('description')}</p>
      </div>
      <div className="h-full w-[3px] bg-neutral ml-[30px]" />
    </div>
  );
}
