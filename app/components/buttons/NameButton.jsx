import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const classes = `text-4xl self-center no-animation ${lobster.className}`;

const NameButton = () => {
  return (
    <Link className={classes} style={{ color: "#fa8072" }} href="/">
      James Eldridge
    </Link>
  );
};

export default NameButton;
