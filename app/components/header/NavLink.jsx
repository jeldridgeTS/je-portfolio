import Link from "next/link";
import useIsMobile from "@hooks/useIsMobile";

export default function NavLink({ children, ...props }) {
  const isMobile = useIsMobile();
  console.log("isMobile:", isMobile);

  const desktopClasses =
    "btn btn-active btn-primary rounded-none border-none self-center h-full navLinksButton";
  const mobileClasses = "btn btn-secondary";

  const classes = isMobile ? mobileClasses : desktopClasses;

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
