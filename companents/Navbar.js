import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/nav.module.scss";

const nav = [
  { id: 1, title: "home", path: "/" },
  { id: 2, title: "ssg-ssr", path: "/postsstatic/ssg-ssr" },
  { id: 3, title: "pre-rendering", path: "/postsstatic/pre-rendering" },
  // { id: 4, title: "Error 404", path: "/postsfromresurse/3" },
  { id: 5, title: "contacts", path: "/contacts" },
  { id: 6, title: "posts", path: "/posts" },
];

const Navbar = () => {
  const { pathname } = useRouter(); //подсвечиваем акт ссылку

  return (
    <div className="Navbar">
      <h1>Navbar</h1>
      <Image src="/images/cat.jpg" width={60} height={60} alt="cat" />

      <ul className="divide-gray-200 flex justify-justifyContent: bg-center">
        {nav.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={pathname === path ? styles.active : null}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
