import cx from 'classnames';
import type {CSSProperties, FC, ReactElement, ReactNode} from 'react';

import {Text, TextSize} from 'src/components/ui/Text';
import type {TextWeight} from 'src/components/ui/Text/Text';
import {Color} from 'src/contstants/Color';
import type {SvgProps} from 'src/types/common';

import s from './RadioInput.module.scss';

export declare namespace RadioInput {
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
    <svg className={props.className} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z' fill='black' />
      <rect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='black' />
      <rect x='5.83301' y='5.83398' width='8.33333' height='8.33333' rx='3' fill='white' />
    </svg>
  );
};

export const RadioInput: FC<RadioInput.Props> = (props) => {
  const toggleValue = () => {
    if (props.disabled) {
      return;
    }
    props.onChange(!props.value, props.name || null);
  };

  return (
    <div style={props.style}
      className={cx(s.RadioInput, {[s.lightBg]: props.lightBg, [s.disabled]: props.disabled}, props.className)}
      onClick={toggleValue}
    >
      <div className={cx(s.toggle, {[s.checked]: props.value})}>
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
