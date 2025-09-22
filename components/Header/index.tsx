interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className="w-full p-4 bg-foreground text-background flex justify-center items-center">
      <h1 className="text-lg font-bold">My Application Header</h1>
    </header>
  );
}