const directoryData = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "public",
      isFolder: true,
      children: [
        { name: "index.html", isFolder: false },
        { name: "favicon.ico", isFolder: false },
        { name: "manifest.json", isFoler: false },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        { name: "components", isFolder: true, children: [] },
        { name: "App.jsx", isFolder: false },
        { name: "App.css", isFolder: false },
        { name: "index.js", isFolder: false },
      ],
    },
    { name: "package.json", isFolder: false },
  ],
};

export default directoryData;
