import { SignedIn, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
