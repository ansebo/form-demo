import type {FC} from 'react';

import type {FieldProps} from 'src/components/common/Form/fields/fieldsModel';
import {fieldsModel} from 'src/components/common/Form/fields/fieldsModel';
import {FieldType, useFormModel} from 'src/components/common/Form/Form';
import type {FormField} from 'src/components/common/Form/types';
import {Select} from 'src/components/ui/Select';

export declare namespace SelectField {
  export type Props = FieldProps<FormField.Select> & {
    onChange?(value: string, name: string | null): void,
  };
}

export const SelectField: FC<SelectField.Props> = (props) => {
  const {field, onChange, ...selectProps} = props;
  const form = useFormModel();

  return (
    <div>
      <Select
        value={field.value}
        label={field.label}
        name={field.name}
        options={field.options}
        error={field.isDirty ? field.error : null}
        disabled={field.disabled}
        onChange={onChange || form.onChange as any}
        isSearchable={field.isSearchable}
        isClearable={field.isClearable}
        inputValue={field.inputValue}
        {...selectProps}
      />
    </div>
  );
};

fieldsModel.register({
  type: FieldType.select,
  component: SelectField,
});
