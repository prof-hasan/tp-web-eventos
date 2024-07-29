import { z } from 'zod';

export const createEventSchema = z.object({
  name: z.string({
    message: 'Nome é obrigatório',
  }),
  description: z.string({
    message: 'Descrição é obrigatória',
  }),
  category: z.enum(['music', 'theater', 'movies'], {    
    message: 'Categoria é obrigatória',
  }),
  country: z.string({
    message: 'País é obrigatório',
  }),
  state: z.string({
    message: 'Estado é obrigatório',
  }),
  city: z.string({
    message: 'Cidade é obrigatória',
  }),
  address: z.string({
    message: 'Endereço é obrigatório',
  }),
  date: z.string({
    message: 'Data é obrigatória',
  }),
  time: z.string({
    message: 'Hora é obrigatória',
  }),
});
