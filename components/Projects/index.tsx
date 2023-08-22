import React from 'react';
import ProjectDesc from './_components/ProjectDesc';
import ProjectTitle from './_components/ProjectTitle';



export default function Projects({data} : {data: {
    title : string,
    Img : JSX.Element,
    desc : string
}[]}) {
  return (
    <div className="my-[40px] ml-[500px] mr-[50px] h-full">
      {data.map((each, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <div className="collapse">
              <input type="radio" name="my-accordion-1" />
              <ProjectTitle title={each.title} Img={each.Img}/>
              <ProjectDesc {...each} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
