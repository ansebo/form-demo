import type {FC} from 'react';

import type {CheckBox} from 'src/components/ui/CheckBox';
import type {Input} from 'src/components/ui/Input';
import type {RadioInput} from 'src/components/ui/RadioInput';
import type {RangeInput} from 'src/components/ui/RangeInput';
import type {Select} from 'src/components/ui/Select';
import type {Switch} from 'src/components/ui/Switch';
import type {TextWeight} from 'src/components/ui/Text/Text';
import type {TextArea as TextAreaComponent} from 'src/components/ui/TextArea';

import type {FieldProps} from './fields/fieldsModel';

import type {FieldType} from './Form';

export declare namespace FormFieldModel {
  type BaseFieldModel = {
    name: string,

    disabled?: boolean,
    isHidden?: boolean,
    validations?: Array<(value: any, values: any) => string | null>,
    toValue?(rawValue: any): any,
    fromValue?(value: any): any,
    transform?(field: FormFieldModel): FormFieldModel,
    defaultValue?: any,
    order?: number,
  }

  export type Text = BaseFieldModel & Omit<Input.Props, 'value' | 'onChange'> & {
    type: FieldType.text,
    isFormattedNumber?: boolean,
  };

  export type TextArea = BaseFieldModel & Omit<TextAreaComponent.Props, 'value' | 'onChange'> & {
    type: FieldType.textArea
  }

  export type Number = Omit<Text, 'regExp' | 'type' | 'mask'> & {
    type: FieldType.number,
    label: string,
    isInteger: boolean,
    isFormattedNumber?: boolean,
  };

  export type Phone = Omit<Text, 'regExp' | 'type' | 'mask'> & {
    type: FieldType.phone,
  }

  export type FileArray = BaseFieldModel & {
    type: FieldType.fileArray,

    label?: string,
  }

  export type File = BaseFieldModel & {
    type: FieldType.file,

    label?: string,
  }

  export type Password = BaseFieldModel & {
    type: FieldType.password,
    label: string,
  }

  export type Custom = BaseFieldModel & {
    type: FieldType.custom,
    Field: FC<FieldProps<any>>,
    options?: Record<string, any>,
    label?: string,
  }

  export type Hidden = BaseFieldModel & {
    type: FieldType.hidden,
  }

  export type Select = BaseFieldModel & Omit<Select.Props, 'value' | 'onChange'> & {
    type: FieldType.select,

    label?: string,
  }

  export type Switch = BaseFieldModel & Omit<Switch.Props, 'value' | 'onChange'> & {
    type: FieldType.switch,

    label?: string,
  }

  export type Checkbox = BaseFieldModel & Omit<CheckBox.Props, 'value' | 'onChange'> & {
    type: FieldType.checkbox,

    label?: string,
    fontWeight?: TextWeight,
  }

  export type Range = BaseFieldModel & Omit<RangeInput.Props, 'value' | 'onChange'> & {
    type: FieldType.range,

    label?: string,
  }

  export type Radio = BaseFieldModel & Omit<RadioInput.Props, 'value' | 'onChange'> & {
    type: FieldType.radio,
    options: Array<{
      value: string,
      label: string,
      isDisabled?: boolean,
    }>,

    label?: string,
  }
}

export type FormFieldModel = (
  FormFieldModel.Text |
  FormFieldModel.TextArea |
  FormFieldModel.Number |
  FormFieldModel.FileArray |
  FormFieldModel.File |
  FormFieldModel.Password |
  FormFieldModel.Phone |
  FormFieldModel.Custom |
  FormFieldModel.Hidden |
  FormFieldModel.Select |
  FormFieldModel.Switch |
  FormFieldModel.Checkbox |
  FormFieldModel.Range |
  FormFieldModel.Radio
);

export declare namespace FormField {
  export type BaseField = FormFieldModel.BaseFieldModel & {
    value: any,
    error: string | null,
    isValid: boolean,
    isDirty: boolean,
    isChanged: boolean,
  };

  export type Text = BaseField & FormFieldModel.Text;
  export type TextArea = BaseField & FormFieldModel.TextArea;
  export type Number = BaseField & FormFieldModel.Number;
  export type Phone = BaseField & FormFieldModel.Phone;
  export type FileArray = BaseField & FormFieldModel.FileArray;
  export type File = BaseField & FormFieldModel.File;
  export type Custom = BaseField & FormFieldModel.Custom;
  export type Hidden = BaseField & FormFieldModel.Hidden;
  export type Select = BaseField & FormFieldModel.Select;
  export type Switch = BaseField & FormFieldModel.Switch;
  export type Checkbox = BaseField & FormFieldModel.Checkbox;
  export type Range = BaseField & FormFieldModel.Range;
  export type Radio = BaseField & FormFieldModel.Radio;
}

export type FormField =
  FormField.Text |
  FormField.TextArea |
  FormField.Number |
  FormField.Phone |
  FormField.FileArray |
  FormField.File |
  FormField.Custom |
  FormField.Hidden |
  FormField.Select |
  FormField.Switch |
  FormField.Checkbox |
  FormField.Range |
  FormField.Radio;
