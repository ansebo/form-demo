import cx from 'classnames';
import type {CSSProperties, FC} from 'react';
import React from 'react';

import {Preloader} from 'src/components/common/Preloader';
import {PreloaderTheme} from 'src/components/common/Preloader/Preloader';

import s from './Button.module.scss';

export enum ButtonSize {
  m = 'm',
  s = 's',
  xs = 'xs',
}

export enum ButtonTheme {
  black = 'black',
  red = 'red',
  white = 'white',
  light = 'light',
}

export declare namespace Button {
  export type Props = {
    theme: ButtonTheme,

    size?: ButtonSize,
    sizeSm?: ButtonSize,
    sizeMd?: ButtonSize,
    sizeLg?: ButtonSize,
    sizeXl?: ButtonSize,
    sizeXxl?: ButtonSize,
    onClick?(): void,
    className?: string,
    disabled?: boolean,
    style?: CSSProperties,
    type?: 'button' | 'submit' | 'reset',
    form?: string,
    isLoading?: boolean,
    children?: React.ReactNode,
  };
}

export const Button: FC<Button.Props> = (props) => {
  const className = cx(
    s.Button,
    s[`theme_${props.theme}`],
    props.size ? s[`size_${props.size}`] : null,
    props.sizeSm ? s[`sizeSm_${props.sizeSm}`] : null,
    props.sizeMd ? s[`sizeMd_${props.sizeMd}`] : null,
    props.sizeLg ? s[`sizeLg_${props.sizeLg}`] : null,
    props.sizeXl ? s[`sizeXl_${props.sizeXl}`] : null,
    props.sizeXxl ? s[`sizeXxl_${props.sizeXxl}`] : null,
    props.disabled ? s.disabled : null,
    props.isLoading ? s.loading : null,
    props.className
  );

  const onClick = () => {
    if (props.disabled) {
      return;
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      disabled={Boolean(props.disabled)}
      style={props.style}
      className={className}
      type={props.type}
      form={props.form}
      onClick={onClick}
    >
      { props.isLoading ? (
        <span className={s.preloader}>
          <Preloader theme={
            (props.theme === ButtonTheme.light || props.theme === ButtonTheme.white)
              ? PreloaderTheme.light
              : PreloaderTheme.black
          } />
        </span>
      ) : null }
      { props.children }
    </button>
  );
};
