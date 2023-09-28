import cx from 'classnames';
import type {FC} from 'react';
import React from 'react';

import s from './FormRow.module.scss';

export declare namespace FormRow {
  export type Props = {
    className?: string,
    children?: React.ReactNode,
  };
}

export const FormRow: FC<FormRow.Props> = (props) => {
  return (
    <div className={cx('row gx-3', s.FormRow, props.className)}>{ props.children }</div>
  );
};

