import { z } from 'zod';

export const storeModalFormSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
});

export type StoreModalForm = z.infer<typeof storeModalFormSchema>;
