import cx from 'classnames';
import _ from 'lodash';
import type {FC} from 'react';
import {useEffect, useMemo, useState} from 'react';
import ReactSelect, {components} from 'react-select';

import {Text, TextSize} from 'src/components/ui/Text';
import {Color} from 'src/contstants/Color';
import {DropDownIcon} from 'src/icons/DropDownIcon';

import s from './Select.module.scss';

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

export declare namespace Select {
  export type Props = {
    onChange(value: string | null, option: Option | null, name: string | null): void,
    value: string | Option | null,

    isAsync?: boolean,
    options?: Option[],
    inputValue?: string,
    name?: string | null,
    className?: string,
    label?: string,
    placeholder?: string,
    isClearable?: boolean,
    isSearchable?: boolean,
    loadOptions?: LoadOptions,
    cacheOptions?: boolean,
    error?: string | null,
    disabled?: boolean,
    noOptionsMessage?(opts: { inputValue: string }): string | null,
  };

  export type LoadOptions = (inputValue: string) => Promise<Option[]>;

  export type Option = {
    value: string,
    label: string,
    isDisabled?: boolean,
  };
}

export const Select: FC<Select.Props> = (props) => {
  const [inputValue, setInputValue] = useState(props.inputValue || '');
  const [options, setOptions] = useState<Select.Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const noOptionsMessage = useMemo(() => {
    return props.noOptionsMessage || (() => 'Ничего не найдено');
  }, []);

  const value = useMemo(() => {
    if (_.isString(props.value)) {
      if (!props.options) {
        return null;
      }
      return props.options.find((option) => option.value === props.value);
    }

    return props.value;
  }, [props.value]);

  const onChange = (newValue: Select.Option | null) => {
    props.onChange(newValue ? newValue.value : null, newValue, props.name || null);
  };

  useEffect(() => {
    const loadOptions = async() => {
      if (!props.loadOptions || !props.isAsync) {
        return;
      }

      setIsLoading(true);
      try {
        const newOptions = await props.loadOptions(inputValue);
        setOptions(newOptions);
      } catch (e) {
        console.error('Error loading options', e);
      }

      setIsLoading(false);
    };

    loadOptions();
  }, [inputValue]);

  return (
    <div className={s.wrapper}>
      <ReactSelect
        className={cx(s.Select,
          props.className,
          {[s.withError]: Boolean(props.error)},
          {[s.disabled]: props.disabled})}
        placeholder={props.placeholder || props.label}
        options={props.options || options}
        inputValue={inputValue}
        value={value}
        isLoading={isLoading}
        onInputChange={(newInputValue) => setInputValue(newInputValue)}
        isSearchable={props.isSearchable}
        onChange={onChange as any}
        isClearable={props.isClearable == null ? false : props.isClearable}
        classNamePrefix='select'
        noOptionsMessage={noOptionsMessage}
        components={{DropdownIndicator}}
        isDisabled={props.disabled}
      />
      { props.label && props.disabled ? (
        <Text
          className={cx(s.label)}
          size={TextSize.caption1}
          color={null}
        >
          { props.label }
        </Text>
      ) : null }
      { props.error ? (
        <Text size={TextSize.bodyMini} color={Color.red} className={s.error}>
          { props.error }
        </Text>
      ) : null }
    </div>
  );
};
