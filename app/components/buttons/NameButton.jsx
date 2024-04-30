import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "900", subsets: ["latin"] });

const classes = `text-4xl self-center no-animation ${rubik.className}`;

const NameButton = () => {
  return (
    <Link className={classes} style={{ color: "#fa8072" }} href="/">
      James Eldridge
    </Link>
  );
};

export default NameButton;
