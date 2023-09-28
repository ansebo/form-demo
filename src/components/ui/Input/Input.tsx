// @ts-nocheck
import cx from 'classnames';
import type {ChangeEvent, FC, FocusEventHandler, ReactNode} from 'react';
import React, {useLayoutEffect, useRef, useState} from 'react';
import InputMask from 'react-input-mask';

import {Text, TextSize} from 'src/components/ui/Text';
import {Color} from 'src/contstants/Color';
import {useOnClickOutside} from 'src/hooks/useOnClickOutside';
import type {DivProps} from 'src/types/common';
import { formatNumber } from 'src/utils/formatNumber';
import { parseNumber } from 'src/utils/parseNumber';

import s from './Input.module.scss';

export declare namespace Input {
  export type OnChange = (value: string, name: string | null, e: ChangeEvent<HTMLInputElement>) => void;

  export type Props = {
    value: string,
    onChange: OnChange,

    label?: string,
    className?: string,
    containerProps?: DivProps,
    error?: string | null,
    name?: string | null,
    disabled?: boolean,
    regExp?: RegExp,
    isPassword?: boolean,
    mask?: string,
    postfix?: ReactNode,
    showErrorMessage?: boolean,
    focus?: boolean,
    isFormattedNumber?: boolean,
  };
}

export const Input: FC<Input.Props> = React.memo((props) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const controlRef = useRef<HTMLInputElement | null>(null);

  useOnClickOutside(inputRef, () => {
    setIsFocused(false);
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget;

    if (props.regExp && !props.regExp.test(value)) {
      return;
    }

    props.onChange(props.isFormattedNumber ? parseNumber(value) : value, props.name || null, e);
  };

  const onFocus = () => {
    if (props.disabled) {
      return;
    }

    setIsFocused(true);
    if (controlRef.current) {
      controlRef.current.focus();
    }
  };

  useLayoutEffect(() => {
    if (props?.focus) {
      onFocus();
    }
  });

  const onBlur: FocusEventHandler<HTMLInputElement> = () => {
    setIsFocused(false);
  };

  const isControlVisible = Boolean(props.value || isFocused);

  const controlProps = {
    type: props.isPassword ? 'password' : 'text',
    autoComplete: 'off',
    onFocus,
    onBlur,
    className: cx(s.control, {[s.withLabel]: Boolean(props.label), [s.isControlVisible]: isControlVisible}),
    onChange,
    name: props.name || undefined,
    value: props.value ? (props.isFormattedNumber ? formatNumber(props.value) : props.value) : '',
    disabled: props.disabled,
  };

  return (
    <React.Fragment>
      <div
        {...props.containerProps}
        ref={inputRef}
        className={cx(s.input, props.className, {
          [s.withError]: props.error,
          [s.focused]: isFocused,
          [s.disabled]: props.disabled,
        })}
        onClick={onFocus}
      >
        { props.label ? (
          <Text
            className={cx(s.label, {[s.isControlVisible]: isControlVisible})}
            size={isControlVisible ? TextSize.caption1 : TextSize.body1}
            color={isControlVisible ? null : Color.gray4}
          >
            { props.label }
          </Text>
        ) : null }
        <div className={s.controlContainer}>
          { props.mask ? (
            <InputMask mask={props.mask} {...controlProps}>
              { (inputProps: unknown) => (
                <input
                  {...inputProps}
                  ref={controlRef}
                />
              ) }
            </InputMask>
          )
            : <input {...controlProps} ref={controlRef} />
          }
          { props.postfix ? (
            <div className={s.postfix}>
              { props.postfix }
            </div>
          ) : null }
        </div>
      </div>
      { props.error && props.showErrorMessage !== false
        ? <Text size={TextSize.bodyMini} color={Color.red} className={s.error}>{ props.error }</Text>
        : null }
    </React.Fragment>
  );
});
