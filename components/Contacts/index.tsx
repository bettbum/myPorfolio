import Contact from "./_components/Contact";

export default function Contacts({data} : {data: {
    content : string,
    Img : JSX.Element,
}[]}) {
  return (
    <div className="my-[40px] ml-[500px] mr-[50px] h-full">
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