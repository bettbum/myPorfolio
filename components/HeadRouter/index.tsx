import margin from '@/styles/tailwind/margin';
import classNames from 'classnames';
import Routes from '@/routes';
import map from 'lodash/map';
import HeaderLink from 'components/HeaderLink';
import { useTranslation } from '@/app/i18n';
import ChangeLanguage from '../ChangeLanguage';

export default async function HeadRouter({ params: { lng = 'en' } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  const lngReverse = lng === 'en' ? "Français" : "English"
  return (
    <div className={classNames('flex justify-end', margin.header)}>
      {map(Routes, (href, key) => {
        return (
          <HeaderLink href={href} key={key}>
            {key}
          </HeaderLink>
        );
      })}
      <ChangeLanguage title={lngReverse} lng={lng}/>
    </div>
  );
}
