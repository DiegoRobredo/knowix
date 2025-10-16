import { FC } from "react";
interface HeaderProps {};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="w-full p-4 bg-foreground text-background backdrop-blur">
      <h1 className="text-lg font-bold">My Application Header</h1>
    </header>
  );
}

export default Header;