import margin from '@/styles/tailwind/margin';
import classNames from 'classnames';
import Routes from '@/routes';
import map from 'lodash/map';
import HeaderLink from 'components/HeaderLink';
import { useTranslation } from '@/app/i18n';
import ChangeLanguage from '../ChangeLanguage';
import DownloadCV from '../DownloadCV';

export default async function HeadRouter({ params: { lng = 'en' } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  const lngReverse = lng === 'en' ? 'Français' : 'English';
  const max_lg_style = 'max-lg:text-center'
  return (
    <div className='max-w-full overflow-x-auto no-scrollbar'>
      <div
        className={classNames(
          'flex lg:justify-end text-right min-w-[800px]',
          max_lg_style,
          margin.header
        )}
      >
        {map(Routes, (href, key) => {
          return (
            <HeaderLink href={href} key={key}>
              {key}
            </HeaderLink>
          );
        })}
        <DownloadCV />
        <ChangeLanguage title={lngReverse} lng={lng} />
      </div>
    </div>
  );
}
