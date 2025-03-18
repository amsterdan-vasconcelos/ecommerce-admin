export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='size-full grid place-items-center'>{children}</div>;
}
