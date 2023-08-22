export default function ProjectDesc({ desc = '' }) {
  return (
    <div className="collapse-content text-right pr-[6.5rem] relative">
      <div className="whitespace-pre-wrap text-neutral">{desc}</div>
      <div className="w-[0.16rem] h-full bg-neutral absolute right-[4.72rem] top-0"></div>
    </div>
  );
}
