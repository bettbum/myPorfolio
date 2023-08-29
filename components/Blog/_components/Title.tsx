export default function Title({ title = '' }) {
  return <div className="text-4xl font-bold text-neutral mb-[5px] flex whitespace-nowrap max-md:text-2xl">{title}</div>;
}
