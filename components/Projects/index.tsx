import React from 'react';
import ProjectDesc from './_components/ProjectDesc';
import ProjectTitle from './_components/ProjectTitle';



export default function Projects({data} : {data: {
    title : string,
    Img : JSX.Element,
    desc : string
}[]}) {
  return (
    <div className="mt-[6rem] mb-[6rem] max-lg:mt-[2rem]">
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
