import { Controller } from 'react-hook-form';
import { ErrorText, Input } from '../styled/Components';
import React from 'react';

export const HookInput = ({ control, name, value = '', errorValue }) => {
  return <div
    style={{ position: 'relative' }}
  >
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      rules={{ required: true }}
      render={({ field }) => <Input {...field} />}
    />
    {errorValue && <ErrorText>Заполните поле</ErrorText>}
  </div>
}