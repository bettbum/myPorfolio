import Content from "./_components/Content";
import Subtitle from "./_components/Subtitle";
import Title from "./_components/Title";

export default function Blog({
    title='',
    subtitle='',
    content=''
}) {
  return (
    <div className="flex justify-end mt-[8rem] mb-[6rem]">
      <div className="text-right h-full mr-[30px] flex flex-col max-w-[50vw] items-end">
        <Title title={title}/>
        <Subtitle subtitle={subtitle}/>
        <Content content={content}/>
      </div>
      <div className="h-[250px] w-[3px] bg-neutral mr-[70px]" />
    </div>
  );
}
