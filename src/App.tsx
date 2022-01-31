import "./App.css";
import ContextMenu from "./components/ContextMenu";
import Folder from "./components/Folder";
import directoryData from "./directoryData";

function App() {
  return (
    <div className="App">
      <Folder name={directoryData.name} content={directoryData.content} />
      {/* <ContextMenu /> */}
    </div>
  );
}

export default App;
