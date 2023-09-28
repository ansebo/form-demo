import cx from 'classnames';
import type {FC} from 'react';

import {Text, TextSize} from 'src/components/ui/Text';

import s from './FormSubheadline.module.scss';

export declare namespace FormSubheadline {
  export type Props = {
    className?: string,
    children?: React.ReactNode,
  };
}

export const FormSubheadline: FC<FormSubheadline.Props> = (props) => {
  return (
    <Text size={TextSize.subHeadline1} className={cx(s.FormSubheadline, props.className)}>{ props.children }</Text>
  );
};

