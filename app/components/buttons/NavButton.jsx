import Link from "next/link";
import useIsMobile from "@hooks/useIsMobile";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function NavButton({ children, ...props }) {
  const isMobile = useIsMobile();

  const desktopClasses = `btn btn-primary rounded-full border-none self-center pr-12 h-full navLinksButton no-animation shadow-none ${rubik.className}`;
  const mobileClasses = `btn btn-primary rounded-full border-none self-center pr-14 h-full navLinksButton no-animation shadow-none drawerBtns ${rubik.className}`;

  const classes = isMobile ? mobileClasses : desktopClasses;

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
