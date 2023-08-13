import footer from '@/styles/tailwind/footer';
import cn from 'classnames';
import dynamic from 'next/dynamic';
const First = dynamic(() => import("./_sources/First"), { ssr: false })
const Second = dynamic(() => import("./_sources/Second"), { ssr: false })
const Third = dynamic(() => import("./_sources/Third"), { ssr: false })

export default function Wave({}) {
  return (
    <div className={cn(footer.content)}>
      <div className={cn(footer.wave, 'animate-bounce-2s')}>
        <First className="bottom-0" width="100%" height="100%" />
      </div>
      <div className={cn(footer.wave, 'animate-bounce-1.5s')}>
        <Second className="bottom-0" width="100%" height="100%" />
      </div>
      <div className={cn(footer.wave, 'animate-bounce-1s')}>
        <Third className="bottom-0" width="100%" height="100%" />
      </div>
    </div>
  );
}
