/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from 'app/i18n';

export default async function Home({ params: { lng = 'en' } }) {
  const { t } = await useTranslation(lng);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-[32px]">{t('title')}</div>
      <br />
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-[50%] top-[50%] flex w-full p-4 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/[lng]/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
