import { FC } from "react";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full p-4 bg-foreground text-background flex justify-center items-center">
      <p className="text-sm">&copy; 2024 My Application Footer</p>
    </footer>
  );
}

export default Footer;