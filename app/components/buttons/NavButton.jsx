import Link from "next/link";
import useIsMobile from "@hooks/useIsMobile";

export default function NavButton({ children, ...props }) {
  const isMobile = useIsMobile();

  const desktopClasses =
    "btn btn-active btn-primary rounded-none border-none self-center h-full navLinksButton no-animation shadow-none";
  const mobileClasses = "btn btn-secondary";

  const classes = isMobile ? mobileClasses : desktopClasses;

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
