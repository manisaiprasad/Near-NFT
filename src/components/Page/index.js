import React, { useContext, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";
import { appStore, onAppMount } from "../../state/app";

const Page = ({ children }) => {
  const { state, dispatch, update } = useContext(appStore);
  const {
    app,
    views,
    app: { tab, snack },
    near,
    wallet,
    contractAccount,
    account,
    loading,
  } = state;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <div className={styles.page}>
      <Header wallet={wallet} />
      <div className={styles.inner}>{children}</div>
      <Footer />
    </div>
  );
};

export default withRouter(Page);
