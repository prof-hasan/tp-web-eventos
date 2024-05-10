'use client';

import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createEventSchema } from './forms-schemas';
import { InputWithLabel } from '@repo/design-system/molecules';
import { Button } from '@repo/design-system/atoms';

interface CreteEventContainerProps {
  onSubmit: (data: FieldValues) => void;
}

export const CreteEventFormContainer = ({onSubmit}: CreteEventContainerProps) => {
  const { control, formState, handleSubmit } = useForm({
    resolver: zodResolver(createEventSchema),
  });

  const onFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name='name'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Nome'
            type='text'
            placeholder='Digite o nome do evento'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.name && <span>{`${formState.errors.name.message}`}</span> }
      <Controller
        name='description'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Descrição'
            type='text'
            placeholder='Digite a descrição do evento'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.description && <span>{`${formState.errors.description.message}`}</span> }
      <Controller
        name='date'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Data'
            type='date'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.date && <span>{`${formState.errors.date.message}`}</span> }
      <Controller
        name='time'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Hora'
            type='time'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.time && <span>{`${formState.errors.time.message}`}</span> }
      <Controller
        name='country'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='País'
            type='text'
            placeholder='Digite o local do evento'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.country && <span>{`${formState.errors.country.message}`}</span> }
      <Controller
        name='state'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Estado'
            type='text'
            placeholder='Digite a cidade do evento'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.state && <span>{`${formState.errors.state.message}`}</span> }
      <Controller
        name='city'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Cidade'
            type='text'
            placeholder='Digite a cidade do evento'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.city && <span>{`${formState.errors.city.message}`}</span> }
      <Controller
        name='address'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Endereço'
            type='text'
            placeholder='Digite o endereço do evento'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.address && <span>{`${formState.errors.address.message}`}</span> }
      <Button type='submit'>Entrar</Button>
    </form>
  );
};
