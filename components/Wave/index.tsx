import footer from '@/styles/tailwind/footer';
import FirstWave from './_sources/First';
import Second from './_sources/Second';
import cn from 'classnames';
import Third from './_sources/Third';

export default function Wave({}) {
  return (
    <div className={cn(footer.content)}>
      <div className={cn(footer.wave, 'animate-bounce-2s')}>
        <FirstWave className="bottom-0" width="100%" height="100%" />
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
