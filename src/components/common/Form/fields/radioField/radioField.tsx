import cx from 'classnames';
import type {FC} from 'react';

import type {FieldProps} from 'src/components/common/Form/fields/fieldsModel';
import {fieldsModel} from 'src/components/common/Form/fields/fieldsModel';
import {FieldType, useFormModel} from 'src/components/common/Form/Form';
import type {FormField} from 'src/components/common/Form/types';
import {RadioInput} from 'src/components/ui/RadioInput';
import {Text, TextSize} from 'src/components/ui/Text';
import {Color} from 'src/contstants/Color';

export declare namespace RadioField {
  export type Props = FieldProps<FormField.Radio> & {
    onChange?(value: string, name: string | null): void,
  };
}

export const RadioField: FC<RadioField.Props> = (props) => {
  const {field, onChange, ...radioProps} = props;
  const form = useFormModel();

  return (
    <div>
      { field.options.map((option, index) => {
        const handleChange = () => {
          if (onChange) {
            onChange(option.value, field.name);
          } else {
            form.onChange(option.value, field.name);
          }
        };

        return (
          <div className={cx(index !== field.options.length - 1 && 'mb-20px')} key={index}>
            <RadioInput
              value={option.value === field.value}
              label={option.label}
              name={field.name}
              onChange={handleChange}
              fontWeight={field.fontWeight}
              disabled={field.disabled}
              {...radioProps}
            />
          </div>
        );
      }) }
      { field.isDirty && field.error ? (
        <Text size={TextSize.bodyMini} color={Color.red} className={'serror'}>
          { field.error }
        </Text>
      ) : null }
    </div>
  );
};

fieldsModel.register({
  type: FieldType.radio,
  component: RadioField,
});
