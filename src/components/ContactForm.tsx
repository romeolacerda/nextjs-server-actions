'use client'

import { FormEvent, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Loader2Icon } from 'lucide-react';

interface IContactFormProps {
  contact?: {
    name: string;
    email: string;
  };
  submitAction?: (formData: {
    name: string;
    email: string;
  }) => Promise<any>;
}

export function ContactForm({ contact, submitAction }: IContactFormProps) {
  const [name, setName] = useState(contact?.name ?? '');
  const [email, setEmail] = useState(contact?.email ?? '');
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)
    await submitAction?.({ name, email })
    setIsLoading(false)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <Label>Nome</Label>
        <Input
          value={name}
          name="name"
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div className="space-y-1.5">
        <Label>E-mail</Label>
        <Input
          value={email}
          name="email"
          onChange={event => setEmail(event.target.value)}
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading && <Loader2Icon className='size-4 mr-1 animate-spin'/>}
        {contact ? 'Salvar' : 'Criar'}
      </Button>
    </form>
  );
}
