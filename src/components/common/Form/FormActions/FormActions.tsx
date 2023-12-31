import cx from 'classnames';
import type {FC} from 'react';
import React from 'react';

import {FormRow} from 'src/components/common/Form/FormRow';

import s from './FormActions.module.scss';

export declare namespace FormActions {
  export type Props = {
    className?: string,
    children?: React.ReactNode
  };
}

export const FormActions: FC<FormActions.Props> = (props) => (
  <FormRow className={cx('justify-content-center', s.FormActions, props.className)}>
    { props.children }
  </FormRow>
);
