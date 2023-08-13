import Wave from 'components/Wave';
import footer from 'styles/tailwind/footer';
import cn from 'classnames';

export default function Footer() {
  return (
    <div className={cn(footer.position)}>
      <Wave />
    </div>
  );
}
