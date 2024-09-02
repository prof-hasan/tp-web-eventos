'use client';

import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createEventSchema } from './forms-schemas';
import { InputLabel } from '@repo/design-system/molecules';
import { Button, Label, Select, SelectContent, SelectItem, SelectTrigger } from '@repo/design-system/atoms';
import { EventsCategoryEntity } from '../../../../../packages/domain-events/src/category';

interface CreteEventContainerProps {
  categories: EventsCategoryEntity[];
  onSubmit: (data: FieldValues) => void;
}

export const CreteEventFormContainer = ({ categories, onSubmit }: CreteEventContainerProps) => {
  const { control, formState, handleSubmit } = useForm({
    resolver: zodResolver(createEventSchema),
  });

  const onFormSubmit = (data: FieldValues) => {
    console.log(data);
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='flex flex-col items-center justify-center gap-5 p-2'
    >
      <div className='flex w-3/4 flex-col gap-2'>
        <div>
          <Controller
            name='name'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Nome'
                type='text'
                placeholder='Digite o nome do evento'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.name && <span className='text-sm text-red-500'>{`${formState.errors.name.message}`}</span>}
        </div>
        <div>
          <Controller
            name='description'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Descrição'
                type='text'
                placeholder='Digite a descrição do evento'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.description && (
            <span className='text-sm text-red-500'>{`${formState.errors.description.message}`}</span>
          )}
        </div>
        <div>
          <Controller
            name='category'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div>
                <Label label='Categoria' />
                <Select
                  value={value}
                  onValueChange={onChange}
                >
                  <SelectTrigger placeholder={'Categorias'} />
                  <SelectContent>
                    {categories?.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id}
                      >
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          />
          {formState.errors.type && <span className='text-sm text-red-500'>{`${formState.errors.type.message}`}</span>}
        </div>
        <div>
          <Controller
            name='date'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Data'
                type='date'
                onChange={onChange}
                pattern='dd-mm-yyyy'
              />
            )}
          />
          {formState.errors.date && <span className='text-sm text-red-500'>{`${formState.errors.date.message}`}</span>}
        </div>
        <div>
          <Controller
            name='time'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Hora'
                type='time'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.time && <span className='text-sm text-red-500'>{`${formState.errors.time.message}`}</span>}
        </div>
        <div>
          <Controller
            name='country'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='País'
                type='text'
                placeholder='Digite o local do evento'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.country && (
            <span className='text-sm text-red-500'>{`${formState.errors.country.message}`}</span>
          )}
        </div>
        <div>
          <Controller
            name='state'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Estado'
                type='text'
                placeholder='Digite a cidade do evento'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.state && (
            <span className='text-sm text-red-500'>{`${formState.errors.state.message}`}</span>
          )}
        </div>
        <div>
          <Controller
            name='city'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Cidade'
                type='text'
                placeholder='Digite a cidade do evento'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.city && <span className='text-sm text-red-500'>{`${formState.errors.city.message}`}</span>}
        </div>
        <div>
          <Controller
            name='address'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Endereço'
                type='text'
                placeholder='Digite o endereço do evento'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.address && (
            <span className='text-sm text-red-500'>{`${formState.errors.address.message}`}</span>
          )}
        </div>
      </div>
      <Button
        className='w-3/4'
        type='submit'
      >
        Criar evento
      </Button>
    </form>
  );
};
