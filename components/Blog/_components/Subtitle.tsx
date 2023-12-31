export default function Subtitle({ subtitle = '' }) {
  return (
    <div className="text-2xl font-thin text-neutral mb-[10px] flex max-md:text-lg">{subtitle}</div>
  );
}
