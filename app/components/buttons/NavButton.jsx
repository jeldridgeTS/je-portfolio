import Link from "next/link";
import useIsMobile from "@hooks/useIsMobile";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function NavButton({ children, ...props }) {
  const isMobile = useIsMobile();

  const desktopClasses = `btn btn-primary rounded-full border-none self-center pr-12 h-full navLinksButton no-animation shadow-none ${lobster.className}`;
  const mobileClasses = `btn btn-primary rounded-full border-none self-center pr-14 h-full navLinksButton no-animation shadow-none drawerBtns ${lobster.className}`;

  const classes = isMobile ? mobileClasses : desktopClasses;

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
