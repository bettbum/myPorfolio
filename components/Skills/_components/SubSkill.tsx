import Cloud from '@/components/Cloud';
import range from 'lodash/range';

export default function SubSkill({
    title = '', points = 0
}) {
  return (
    <div className="flex">
      <div className="flex flex-row justify-end w-3/5">
        {range(points).map((point, index) => {
          return (
            <div key={index} className="mx-[5px]">
              <Cloud width="25" height="25" />
            </div>
          );
        })}
      </div>
      <p className="w-2/5 text-neutral">{title}</p>
    </div>
  );
}
