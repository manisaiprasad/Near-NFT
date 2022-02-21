import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.stage}>next-gen investing</div>
          <h1 className={cn("h1", styles.title)}>
            Discover, collect, and sell incredible NFTs
          </h1>
          <div className={styles.text}>
            On chain Mint, Sell, and Trade NFTs.
          </div>

          <div className={styles.btns}>
            <Image
              srcSet="/images/content/built_on_near_light.png"
              srcSetDark="/images/content/built_on_near.png"
              src="/images/content/built_on_near_light.png"
              srcDark="/images/content/built_on_near.png"
              alt="Cubes"
              className={styles.btns}
            />
            {/* <Link className={cn("button", styles.button)} to="/upload-variants">
              Create item
            </Link>
            <Link className={cn("button-stroke", styles.button)} to="/search01">
              Discover more
            </Link> */}
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/dog.png"
              srcSetDark="/images/content/dog.png"
              src="/images/content/dog.png"
              srcDark="/images/content/dog.png"
              alt="Cubes"
            />
          </div>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/dog3.png"
              srcSetDark="/images/content/dog3.png"
              src="/images/content/dog3.png"
              srcDark="/images/content/dog3.png"
              alt="Cube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
