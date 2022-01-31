import { CREATE_FOLDER } from "../constants";

const directoryReducer = (
  state = {
    name: "root",
    isFolder: true,
    content: [
      {
        name: "public",
        isFolder: true,
        content: [
          { name: "index.html", isFolder: false },
          { name: "favicon.ico", isFolder: false },
          { name: "manifest.json", isFolder: false },
        ],
      },
      {
        name: "src",
        isFolder: true,
        content: [
          {
            name: "styles",
            isFolder: true,
            content: [
              {
                name: "App.scss",
                isFolder: false,
              },
            ],
          },
          { name: "components", isFolder: true, content: [] },
          { name: "App.jsx", isFolder: false },
          { name: "App.css", isFolder: false },
          { name: "index.js", isFolder: false },
        ],
      },
      { name: "package.json", isFolder: false },
    ],
  },
  action: { type: string }
) => {
  switch (action.type) {
    case CREATE_FOLDER:
      return {};
    default:
      return state;
  }
};

export default directoryReducer;
