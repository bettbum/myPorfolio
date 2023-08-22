export default function Content({ content = '' }) {
  return (
    <div className="scroll-smooth h-[100vh] max-h-[150px] overflow-y-auto flex justify-end text-lg text-neutral whitespace-pre-wrap">
      {content}
    </div>
  );
}
