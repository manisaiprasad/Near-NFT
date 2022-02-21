import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import User from "./User";

const nav = [
  {
    url: "/search01",
    title: "Explore",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];

const Headers = ({ wallet }) => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");
  const signedIn = wallet && wallet.signedIn;

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/logo-dark.png"
            srcDark="/images/logo-light.png"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                // activeClassName={styles.active}
                to={x.url}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </nav>
          <form className={styles.search}>
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button href="/search" className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form>
          <Link
            className={cn("button-small", styles.button)}
            to="/upload-variants"
          >
            Upload
          </Link>
        </div>
        <Link
          className={cn("button-small", styles.button)}
          to="/upload-variants"
        >
          Upload
        </Link>
        {!signedIn ? (
          <button
            onClick={() => wallet.signIn()}
            className={cn("button-stroke button-small", styles.button)}
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <User className={styles.user} wallet={wallet} />
            <button
              className={cn(styles.burger, { [styles.active]: visibleNav })}
              onClick={() => setVisibleNav(!visibleNav)}
            ></button>
          </>
        )}
      </div>
    </header>
  );
};

export default Headers;
