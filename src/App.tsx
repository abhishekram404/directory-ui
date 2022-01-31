import "./App.css";
import Folder from "./components/Folder";
import directoryData from "./directoryData";

function App() {
  return (
    <div className="App">
      <Folder name={directoryData.name} content={directoryData.content} />
    </div>
  );
}

export default App;
