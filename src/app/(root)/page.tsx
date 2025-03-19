'use client';

import { useEffect } from 'react';
import { SignedIn, UserButton } from '@clerk/nextjs';

import { useStoreModal } from '@/hooks/use-store-modal';

export default function RootPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return (
    <div>
      <h1>RootPage</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
