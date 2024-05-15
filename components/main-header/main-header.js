import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader = () => {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={logoImg} alt="food" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href={"/meals"}
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href={"/community"}
                className={
                  path.startsWith("/community") ? classes.active : undefined
                }
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
