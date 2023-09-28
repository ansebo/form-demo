import cx from 'classnames';
import type {FC, ReactNode} from 'react';
import {useCallback} from 'react';

import {Input} from 'src/components/ui/Input';
import {Text, TextSize} from 'src/components/ui/Text';
import {Color} from 'src/contstants/Color';
import {integerRegExp} from 'src/contstants/regExp';
import { formatNumber } from 'src/utils/formatNumber';
import type {Plurals} from 'src/utils/plural';

import {Range} from './Range';
import s from './RangeInput.module.scss';

export declare namespace RangeInput {
  export type Props = {
    value: number,
    min: number,
    max: number,
    onChange: (value: number, name: string | null) => void;
    name?: string,
    label?: string,
    error?: string | null,
    postfix?: ReactNode | Plurals
  };
}

export const RangeInput: FC<RangeInput.Props> = (props) => {
  const {value, min, max} = props;


  const onChangeInput: Input.OnChange = useCallback((value, name) => {
    let val = parseInt(value.split(' ').join(''), 10);
    if (val > props.max) {
      val = props.max;
    }
    props.onChange(val, name);
  }, [props.onChange]);

  function onChangeRange(value:number): void {
    props.onChange(value, props.name || null);
  }


  return (
    <div className={s.rangeInput}>
      { props.label ? (
        <Text
          className={cx(s.label)}
          size={TextSize.tabMenu}
          color={Color.gray4}
        >
          { props.label }
        </Text>
      ) : null }
      <Input
        value={value ? formatNumber(value) : ''}
        onChange={onChangeInput}
        regExp={integerRegExp}
        postfix={props.postfix}
        className={s.textInput}
        error={props.error}
        showErrorMessage={false}
      />
      <Range value={value} min={min} max={max} onChange={onChangeRange} />
      { props.error
        ? <Text size={TextSize.bodyMini} color={Color.red} className={s.error}>{ props.error }</Text>
        : null }
    </div>
  );
};
