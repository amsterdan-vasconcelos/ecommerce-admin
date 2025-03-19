'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  storeModalFormSchema,
  type StoreModalForm,
} from '@/schemas/form-schemas';
import { useStoreModal } from '@/hooks/use-store-modal';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';

export function StoreModal() {
  const { isOpen, onClose } = useStoreModal();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<StoreModalForm>({
    resolver: zodResolver(storeModalFormSchema),
    defaultValues: { name: '' },
  });

  const onSubmit = (values: StoreModalForm) => {
    console.log(values);
  };

  const onChange = (open: boolean) => {
    if (!open) onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Loja</DialogTitle>
          <DialogDescription>
            Adicione nova loja e organize seus produtos e categorias
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder='E-commerce' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className='mt-4'>
              <Button
                type='button'
                onClick={onClose}
                disabled={isLoading}
                variant={'outline'}>
                Cancelar
              </Button>
              <Button type='submit' disabled={isLoading}>
                Continuar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
