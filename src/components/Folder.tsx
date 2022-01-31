import React, { useState } from "react";
import File from "./File";
import styles from "../styles/folder.module.css";
import clsx from "clsx";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
type Props = {
  name: string;
  content: any;
};
const Folder = (props: Props) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  return (
    <div className={clsx(styles.folder, isExpanded && styles.folderExpanded)}>
      <b onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? <FcOpenedFolder /> : <FcFolder />}
        {props.name}{" "}
        <span className={styles.folderContentLength}>
          ({props.content.length})
        </span>
      </b>
      <div className={styles.content}>
        {isExpanded &&
          props.content &&
          props.content.map((child: any, index: number) => {
            switch (child.isFolder) {
              case true:
                // console.log(child);
                return (
                  <Folder
                    name={child.name}
                    content={child.content}
                    key={index}
                  />
                );
              case false:
                return <File name={child.name} key={index} />;
            }
          })}
      </div>
    </div>
  );
};

export default Folder;
