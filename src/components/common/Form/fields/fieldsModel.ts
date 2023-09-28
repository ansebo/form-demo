import _ from 'lodash';
import type {FC} from 'react';
import { FieldType } from '../Form';
import { FormField, FormFieldModel } from '../types';

export type FieldProps<TField extends FormField.BaseField> = {
  field: TField,
  onChange(value: unknown): void,
}

export type FieldModel = {
  type: FieldType,
  transform?(field: FormFieldModel): FormFieldModel,
  component: FC<any>,
};

export type FieldsModel = {
  register(model: FieldModel): void,
  get(type: string): FieldModel | null,
}

const models: Record<string, FieldModel> = {};

export const fieldsModel: FieldsModel = {
  register(fieldModel) {
    models[fieldModel.type] = {
      ...fieldModel,
      transform: fieldModel.transform || _.identity,
    };
  },
  get(type) {
    return models[type] || null;
  },
};
