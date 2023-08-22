'use client';

import { usePathname, useRouter } from 'next/navigation';
import set from 'lodash/set';

export default function ChangeLanguage({ title = '', lng = '' }) {
  const router = useRouter();
  const pathname = usePathname();
  const pathlist = pathname.split('/');
  const handleChange = () => {
    router.push(set(pathlist, '[1]', lng === 'en' ? 'fr' : 'en').join('/'));
  };
  return (
    <button
      onClick={handleChange}
      className="px-[10px] pb-[10px] ml-[32px] relative"
    >
      <div className="text-neutral">{title}</div>
      <div className="absolute h-[2px] w-full bg-neutral left-0 bottom-0" />
    </button>
  );
}
