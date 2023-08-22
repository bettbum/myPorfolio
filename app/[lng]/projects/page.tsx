/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from '@/app/i18n';
import Projects from '@/components/Projects';
import { Health, Codename, Dict, Task } from '@/components/icons';

export default async function Page({ params: { lng = 'en' } }) {
  const { t } = await useTranslation(lng, 'projects');
  const classIcons = 'fill-neutral w-[18px] h-[18px]'
  const data = [
    {
      title: 'FitStep - Health Tracker Android Application',
      Img: <Health className={classIcons} />,
      desc: t('fitstep_desc'),
    },
    {
      title: 'Codenames - Game Online for Android Application',
      Img: <Codename className={classIcons}/>,
      desc: t('codenames_desc'),
    },
    {
      title: 'PlantDictionary - Plant Dictionary for IOS Application',
      Img: <Dict className={classIcons}/>,
      desc: t('plantdict_desc'),
    },
    {
      title: 'ManageYourTask - Task Management Web Application',
      Img: <Task className={classIcons}/>,
      desc: t('manageyourtask_desc'),
    },
  ];
  return <Projects data={data} />;
}
