import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
import LoaderCircle from "../../../components/LoaderCircle";

const FolowSteps = ({ className }) => {
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsComplete(true);
    }, 7000);
  }, []);
  return (
    <div className={cn(className, styles.steps)}>
      <div className={cn("h4", styles.title)}>Please wait...</div>
      <div className={styles.list}>
        {isComplete ? (
          <div className={cn(styles.item, styles.done)}>
            <div className={styles.head}>
              <div className={styles.icon}>
                <Icon name="upload-file" size="24" />
              </div>
              <div className={styles.details}>
                <div className={styles.info}>Upload files & Mint token</div>
                <div className={styles.text}>Call contract method</div>
              </div>
            </div>
            <button
              onClick={(window.location.href = "/")}
              className={cn("button ", styles.button)}
            >
              Done
            </button>
          </div>
        ) : (
          <div className={styles.item}>
            <div className={styles.head}>
              <div className={styles.icon}>
                <LoaderCircle className={styles.loader} />
              </div>
              <div className={styles.details}>
                <div className={styles.info}>Upload files & Mint token</div>
                <div className={styles.text}>Call contract method</div>
              </div>
            </div>
            <button className={cn("button loading", styles.button)}>
              <Loader className={styles.loader} color="white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FolowSteps;
