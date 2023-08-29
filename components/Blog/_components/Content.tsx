export default function Content({ content = '' }) {
  return (
    <div className="scroll-smooth max-h-[150px] overflow-y-auto text-lg text-neutral whitespace-pre-wrap max-lg:max-h-[80vh] max-md:text-base">
      {content}
    </div>
  );
}
