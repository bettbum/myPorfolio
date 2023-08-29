

export default function ProjectTitle({title, Img}:{title: String, Img: any}) {
  return (
    <div className="collapse-title text-xl font-medium flex flex-row items-center justify-end max-sm:text-lg">
      <div className="text-neutral font-bold">{title} </div>
      <div className="w-[1.6rem] h-[1.6rem] rounded-full border-[0.15rem] border-neutral mx-[1rem] flex items-center justify-center">
        {Img}
      </div>
    </div>
  );
}
