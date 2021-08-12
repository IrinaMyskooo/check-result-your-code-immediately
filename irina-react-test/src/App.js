import "./App.css";
import "antd/dist/antd.css";
import withControlHeight from "./React-test/withControlHeight";
import WindowWidth from "./React-test/WindowWidth";
import WindowHeight from "./React-test/WindowHeight";

const ControledWindowHeight = withControlHeight(WindowHeight);

function App() {
  return (
    <div className="wrapper">
      <WindowWidth />
      <ControledWindowHeight />
    </div>
  );
}

export default App;
