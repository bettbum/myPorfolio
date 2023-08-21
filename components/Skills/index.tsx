'use client';

import Skill from "./_components/Skill";

export default function Skills() {
  const data = [
    {
      skill: 'UX & UI Designs',
      subskills: [
        {
          title: 'Figma',
          points: 4,
        },
        {
          title: 'Canva Utilities',
          points: 4,
        },
      ],
    },
    {
      skill: 'Front-end Development',
      subskills: [
        {
          title: 'HTML',
          points: 4,
        },
        {
          title: 'CSS',
          points: 4,
        },
        {
          title: 'JavaScript',
          points: 4,
        },
        {
          title: 'ReactJS',
          points: 4,
        },
      ],
    },
    {
      skill: 'Backend Development',
      subskills: [
        {
          title: '.Net Core',
          points: 4,
        },
        {
          title: 'NodeJS',
          points: 4,
        },
        {
          title: 'Java',
          points: 4,
        },
      ],
    },
    {
      skill: 'Mobile Development',
      subskills: [
        {
          title: 'Swift',
          points: 4,
        },
        {
          title: 'Kotlin',
          points: 4,
        },
        {
          title: 'ReactNative',
          points: 4,
        },
      ],
    },
    {
      skill: 'Database',
      subskills: [
        {
          title: 'MongoDB',
          points: 4,
        },
        {
          title: 'Firebase',
          points: 4,
        },
        {
          title: 'MySQL',
          points: 4,
        },
      ],
    },
    {
      skill: 'Other',
      subskills: [
        {
          title: 'Git',
          points: 4,
        },
        {
          title: 'GitHub & Bicbucket',
          points: 4,
        },
        {
          title: 'Testing',
          points: 4,
        },
      ],
    },
  ];
  return (
    <div className="scroll-smooth my-[40px] ml-[500px] mr-[50px] h-full">
      {data.map((each, index) => {
        return (
          <Skill key={each.skill} {...each}/>
        );
      })}
    </div>
  );
}
