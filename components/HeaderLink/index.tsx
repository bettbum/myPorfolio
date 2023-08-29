'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderLinkPrototype {
  children: string;
  href: string;
  [key: string]: any;
}

export default function HeaderLink({
  children,
  href,
  ...props
}: HeaderLinkPrototype) {
  const pathname = usePathname();
  const max_lg_style = 'max-lg:ml-0';
  return (
    <div
      className={classNames(
        'px-[10px] pb-[10px] ml-[32px] relative',
        max_lg_style
      )}
    >
      <Link href={href} {...props}>
        <span className="text-neutral">{children}</span>
      </Link>
      {pathname.includes(href) && (
        <div className="absolute h-[2px] w-full bg-neutral left-0 bottom-0" />
      )}
    </div>
  );
}
