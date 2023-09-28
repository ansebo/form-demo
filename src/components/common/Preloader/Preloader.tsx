import cx from 'classnames';
import type {FC} from 'react';

import s from './Preloader.module.scss';

export enum PreloaderTheme {
  black = 'black',
  light = 'light',
}

declare namespace Preloader {
  export type Props = {
    className?: string,
    theme?: PreloaderTheme,
  }
}

export const Preloader: FC<Preloader.Props> = (props) => {
  return (
    <span className={cx(
      s.Preloader,
      props.theme === PreloaderTheme.light && s.themeLight,
      props.className && props.className
    )}>
      <span />
      <span />
      <span />
      <span />
    </span>
  );
};
