import Contact from "./_components/Contact";

export default function Contacts({data} : {data: {
    content : string,
    Img : JSX.Element,
}[]}) {
  return (
    <div className="mt-[6rem] mb-[6rem] max-lg:mt-[2rem]">
      {data.map((each, index) => {
        return (
          <div className="flex flex-col" key={index}>
              <Contact content={each.content} Img={each.Img}/>
          </div>
        );
      })}
    </div>
  );
}