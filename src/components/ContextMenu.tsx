import React from "react";
import styles from "../styles/contextMenu.module.css";
type Props = {
  x: number;
  y: number;
};

const ContextMenu = (props: Props) => {
  return (
    <div className={styles.contextMenu} style={{ top: props.y, left: props.x }}>
      <div>Create folder</div>
      <div>Create file</div>
      <div>Rename</div>
      <div>Delete</div>
    </div>
  );
};

export default ContextMenu;
