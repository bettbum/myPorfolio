import margin from '@/styles/tailwind/margin';
import classNames from 'classnames';
import Routes from '@/routes';
import map from 'lodash/map';
import HeaderLink from 'components/HeaderLink';

export default function HeadRouter() {
  return (
    <div className={classNames("flex justify-end",margin.header)}>
      {map(Routes, (href, key) => {
        return (
          <HeaderLink href={href} key={key}>
            {key}
          </HeaderLink>
        );
      })}
    </div>
  );
}
