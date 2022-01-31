import React, { useEffect, useRef, useState } from "react";
import File from "./File";
import styles from "../styles/folder.module.css";
import clsx from "clsx";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import ContextMenu from "./ContextMenu";
type Props = {
  name: string;
  content: any;
};
const Folder = (props: Props) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const folderRef: any = useRef();
  const [contextPosition, setContextPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [showContext, setShowContext] = useState<boolean>(false);

  // This is not working as expected

  const handleContext = (e: MouseEvent) => {
    e.preventDefault();
    console.info(showContext);
    if (showContext) {
      console.log("already visible");
      return setShowContext(false);
    }
    console.log("SHowing context");

    setContextPosition({
      x: e.clientX,
      y: e.clientY,
    });
    setShowContext(true);
  };

  useEffect(() => {
    if (folderRef && folderRef.current) {
      let eventListener = folderRef.current.addEventListener(
        "contextmenu",
        handleContext
      );

      return () => {
        folderRef.current.removeEventListener("contextmenu", eventListener);
      };
    }
  }, []);

  return (
    <div className={clsx(styles.folder, isExpanded && styles.folderExpanded)}>
      <b onClick={() => setExpanded(!isExpanded)} ref={folderRef}>
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
      {showContext && (
        <ContextMenu x={contextPosition.x} y={contextPosition.y} />
      )}
    </div>
  );
};

export default Folder;
