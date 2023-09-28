import _ from 'lodash';
import type {FC} from 'react';
import {useRef, useState, useMemo} from 'react';
import { Form } from '../common/Form';
import { Field } from '../common/Form/Field';
import { getDefaultFieldValues } from 'src/components/common/Form/getDefaultFieldValues'
import { FieldType } from '../common/Form/Form';
import { required } from 'src/validations/required';

import s from './Demo.module.scss';
import { FormTitle } from '../common/Form/FormTitle';
import { FormRow } from '../common/Form/FormRow';
import { email } from 'src/validations/email';
import { FormActions } from '../common/Form/FormActions';
import { Button, ButtonSize, ButtonTheme } from '../ui/Button';

export declare namespace Demo {
  export type Props = {}
}

export const useFields = () => {
  return useMemo((): Form.FieldModels => ({
    first_name: {
      name: 'first_name',
      type: FieldType.text,
      label: 'Имя',
      validations: [required()],
    },
    last_name: {
      name: 'last_name',
      type: FieldType.text,
      label: 'Фамилия',
      validations: [required()],
    },
    email: {
      name: 'email',
      type: FieldType.text,
      label: 'Почта',
      validations: [required(), email()],
    },
    phone: {
      name: 'phone',
      type: FieldType.phone,
      label: 'Телефон',
      validations: [required()],
    },
  }), []);
};

export const Demo: FC<Demo.Props> = () => {
  const formApiRef = useRef<Form.Api | null>(null);
  const fields = useFields();

  function getInitialValues() {
    return ({
      ...getDefaultFieldValues(fields),
    });
  }

  const initialValues = useMemo(() => getInitialValues(), [fields]);
  const [values, setValues] = useState<Form.Values>(initialValues);
  const [errors, setErrors] = useState<Form.Errors>({});

  const [result, setResult] = useState({});

  const onChange: Form.OnChange = (values, errors) => {
    setValues(values);
    setErrors(errors);
  };

  const handleSubmit = () => {
    if (!formApiRef.current?.isValid) {
      return;
    }
    console.log('Submit!');
    setResult(values);
  }

  return (
    <div className={s.demo}>
      <div className={s.demoForm}>
        <Form
          initialValues={initialValues}
          errors={errors}
          values={values}
          onChange={onChange}
          fields={fields}
          formApiRef={formApiRef}
          onSubmit={handleSubmit}
        >
          <FormTitle>Пример формы</FormTitle>
          <FormRow>
            <Field className='col-12' name='first_name' />
          </FormRow>
          <FormRow>
            <Field className='col-12' name='last_name' />
          </FormRow>
          <FormRow>
            <Field className='col-12' name='email' />
          </FormRow>
          <FormRow>
            <Field className='col-12' name='phone' />
          </FormRow>
          <FormActions>
            <div className='col-12'>
              <Button
                theme={ButtonTheme.black}
                size={ButtonSize.m}
                disabled={Boolean(formApiRef?.current?.isValid === false)}
                type='submit'
              >
                Отправить
              </Button>
            </div>
          </FormActions>
        </Form>
      </div>
      <div className={s.result}>
        {(!_.isEmpty(result) && 
          <>
          <FormTitle>Данные сабмита</FormTitle>
          <pre>{JSON.stringify(result, null, 2) }</pre>
          </>
        )}
      </div>
    </div>
  )
}