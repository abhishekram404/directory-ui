import React from "react";
import styles from "../styles/file.module.css";
import { FcFile } from "react-icons/fc";
type Props = {
  name: string;
};
const File = (props: Props) => {
  return (
    <div className={styles.file}>
      <FcFile /> {props.name}
    </div>
  );
};

export default File;
