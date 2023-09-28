import cx from 'classnames';
import type {CSSProperties, FC, ReactElement, ReactNode} from 'react';

import {Text, TextSize} from 'src/components/ui/Text';
import type {TextWeight} from 'src/components/ui/Text/Text';
import {Color} from 'src/contstants/Color';
import type {SvgProps} from 'src/types/common';

import s from './CheckBox.module.scss';

export declare namespace CheckBox {
  export type Props = {
    value: boolean,
    onChange(value: boolean, name: string | null): void,
    label: ReactNode | ReactElement,

    name?: string | null,
    error?: string | null,
    className?: string,
    style?: CSSProperties,
    lightBg?: boolean,
    fontWeight?: TextWeight,
    disabled?: boolean,
  };
}

const CheckIcon: FC<SvgProps> = (props) => {
  return (
    <svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1.17969 4.06198L4.92357 8.08375L11.824 1.14062' stroke='white' strokeWidth='2' />
    </svg>

  );
};

export const CheckBox: FC<CheckBox.Props> = (props) => {
  const toggleValue = () => {
    if (props.disabled) {
      return false;
    }
    props.onChange(!props.value, props.name || null);
  };

  return (
    <div style={props.style}
      className={cx(
        s.CheckBox,
        {[s.lightBg]: props.lightBg},
        {[s.disabled]: props.disabled},
        props.className)}
      onClick={toggleValue}
    >
      <div className={cx(s.toggle, {[s.checked]: props.value, [s.disabled]: props.disabled})}>
        <CheckIcon className={s.icon} />
      </div>
      <Text size={TextSize.body1} weight={props.fontWeight} className={s.label}>{ props.label }</Text>
      { props.error ? (
        <Text size={TextSize.bodyMini} color={Color.red} className={s.error}>
          { props.error }
        </Text>
      ) : null }
    </div>
  );
};
