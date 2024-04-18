import Link from "next/link";

const NameButton = () => {
  return (
    <Link
      href="projects"
      className="
        btn
        btn-primary
        rounded-none
        border-none
        h-full
      "
    >
      James Eldridge
    </Link>
  );
};

export default NameButton;