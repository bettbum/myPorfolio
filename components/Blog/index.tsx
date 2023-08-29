import classNames from "classnames";
import Content from "./_components/Content";
import Subtitle from "./_components/Subtitle";
import Title from "./_components/Title";

export default function Blog({
    title='',
    subtitle='',
    content=''
}) {
  const max_lg_style = 'max-lg:mt-[2rem] max-lg:mx-[30px] max-lg:justify-center'
  return (
    <div className={classNames('flex lg:justify-end mt-[8rem] mb-[6rem]', max_lg_style)}>
      <div className="text-right h-full flex flex-col lg:mr-[30px] lg:max-w-[50vw] lg:items-end max-lg:items-center max-lg:text-center truncate">
        <Title title={title}/>
        <Subtitle subtitle={subtitle}/>
        <Content content={content}/>
      </div>
      <div className="h-[250px] w-[3px] bg-neutral mr-[70px] max-lg:hidden" />
    </div>
  );
}
