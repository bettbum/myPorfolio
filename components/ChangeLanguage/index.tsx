'use client';

import { usePathname, useRouter } from 'next/navigation';
import set from 'lodash/set';
import classNames from 'classnames';

export default function ChangeLanguage({ title = '', lng = '' }) {
  const router = useRouter();
  const pathname = usePathname();
  const pathlist = pathname.split('/');
  const handleChange = () => {
    router.push(set(pathlist, '[1]', lng === 'en' ? 'fr' : 'en').join('/'));
  };
  const max_lg_style = 'max-lg:ml-0';
  return (
    <div className="max-lg:snap-center">
      <button
        onClick={handleChange}
        className={classNames(
          'px-[10px] pb-[10px] ml-[32px] relative',
          max_lg_style
        )}
      >
        <div className="text-neutral">{title}</div>
        <div className="absolute h-[2px] w-full bg-neutral left-0 bottom-0" />
      </button>
    </div>
  );
}
