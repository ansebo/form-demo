import cx from 'classnames';
import type {CSSProperties, FC} from 'react';
import React from 'react';

import {Text, TextSize} from 'src/components/ui/Text';

import s from './FormTitle.module.scss';

export declare namespace FormTitle {
  export type Props = {
    className?: string,
    style?: CSSProperties,
    children?: React.ReactNode,
  };
}

export const FormTitle: FC<FormTitle.Props> = (props) => {
  return (
    <div style={props.style} className={cx(s.FormTitle, props.className)}>
      <Text className={s.title} size={TextSize.h2}>{ props.children }</Text>
    </div>
  );
};
