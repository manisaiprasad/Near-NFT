import React from "react";
import cn from "classnames";
import styles from "./Checkout.module.sass";
import Icon from "../../../../components/Icon";

const items = [
  {
    title: "0.007",
    value: "NEAR",
  },
  {
    title: "Your balance",
    value: "196 NEAR",
  },
  {
    title: "Service fee",
    value: "1 NEAR",
  },
  {
    title: "You will pay",
    value: "4156 NEAR",
  },
];

const Checkout = ({ className }) => {
  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Checkout</div>
      <div className={styles.info}>
        You are about to purchase <strong>NFT</strong> from{" "}
        <strong>OpenOcean</strong>
      </div>
      <div className={styles.table}>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>

      <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>This creator is not verified</div>
          <div className={styles.text}>Purchase this item at your own risk</div>
        </div>
        <div className={styles.avatar}>
          <img src="/images/content/avatar-2.png" alt="Avatar" />
        </div>
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>
          I understand, continue
        </button>
        <button className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default Checkout;
