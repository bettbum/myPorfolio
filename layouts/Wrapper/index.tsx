import wrapper from '@/styles/tailwind/wrapper';
import cn from 'classnames';

interface WrapperPrototype {
  children: React.ReactNode;
}
export default function Wrapper({ children }: WrapperPrototype) {
  return <div className={cn(wrapper.body)}>{children}</div>;
}
