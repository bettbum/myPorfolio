import SubSkill from "./SubSkill";

export default function Skill({
    skill = '',
    subskills = [{}]
}) {
  return (
    <div className="flex flex-col ">
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium flex flex-row items-center justify-end max-sm:text-lg">
          <div className="text-neutral font-bold whitespace-nowrap">{skill} </div>
          <div className="w-[1.6rem] h-[1.6rem] rounded-full border-[0.15rem] border-neutral mx-[1rem]" />
        </div>
        <div className="collapse-content text-right pr-[6.5rem] relative">
          <div className="flex flex-col">
            {subskills.map((each, index) => {
              return <SubSkill key={index} {...each} />;
            })}
          </div>
          <div className="w-[0.16rem] h-full bg-neutral absolute right-[4.72rem] top-0"></div>
        </div>
      </div>
    </div>
  );
}
