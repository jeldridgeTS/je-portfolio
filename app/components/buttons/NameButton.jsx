import Link from "next/link";
import { Rubik } from "next/font/google";
import useIsMobile from "@hooks/useIsMobile";

const rubik = Rubik({ weight: "900", subsets: ["latin"] });
const classes = `text-primary text-4xl self-center no-animation ${rubik.className}`;

const NameButton = () => {
  const isMobile = useIsMobile();
  const content = isMobile ? "JE" : "James Eldridge";

  return (
    <Link className={classes} href="/">
      {content}
    </Link>
  );
};

export default NameButton;
