import cx from 'classnames';
import type {ChangeEvent, FC} from 'react';

import {Text, TextSize} from 'src/components/ui/Text';
import {adaptiveBreackpoints} from 'src/contstants/adaptiveBreackpoints';
import {Color} from 'src/contstants/Color';
import {breackpointDown, breackpointUp} from 'src/utils/breackpointUtils';

import s from './Switch.module.scss';

export declare namespace Switch {
  export type OnChange = (value: boolean, name: string | null) => void;

  export type Props = {
    value: boolean,
    onChange: OnChange,

    label?: string,
    isLongLabel?: boolean,
    className?: string,
    error?: string | null,
    disabled?: boolean,
    name?: string,
  };
}

export const Switch: FC<Switch.Props> = (props) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.checked, props.name ? props.name : null);
  }

  return (
    <div className={cx(s.switch, props.className)}>
      { props.label ? (
        <label className={cx(s.label, props.isLongLabel && s.labelLong)} htmlFor={props.name}>
          <Text size={props.isLongLabel ? TextSize.tabMenu : TextSize.body0}>
            { props.label }
          </Text>
          { props.error && breackpointDown(adaptiveBreackpoints.md) ? (
            <Text size={TextSize.bodyMini} color={Color.red} className={s.error}>
              { props.error }
            </Text>
          ) : null }
        </label>
      ) : null }
      <div className={s.outer}>
        <input
          type='checkbox'
          className={s.control}
          name={props.name}
          id={props.name}
          onChange={handleChange}
          disabled={props.disabled}
          checked={props.value}
        />
        <label
          className={cx(s.bg, props.value && s.checked, props.disabled && s.disabled)}
          htmlFor={props.name}
        >
          <span className={cx(s.knob, props.value && s.checked)} />
        </label>
      </div>
      { props.error && breackpointUp(adaptiveBreackpoints.md) ? (
        <Text size={TextSize.bodyMini} color={Color.red} className={s.error}>
          { props.error }
        </Text>
      ) : null }
    </div>
  );
};
