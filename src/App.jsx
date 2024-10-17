import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import qwikLogo from "../public/qwik.png";
import angularLogo from "../public/angular.png";
import "./App.css";
import Card from "./components/Card";
import libraries from "./utils/library";

function App() {
  return (
    <>
      <h1> React + Vite + Qwik + Angular </h1>

      <div style={{ display: "inline-flex" }}>
        <Card
          name={"react"}
          logo={reactLogo}
          alt={libraries.react.name}
          url={libraries.react.url}
        />
        <Card
          name={"vite"}
          logo={viteLogo}
          alt={libraries.vite.name}
          url={libraries.vite.url}
        />
        <Card
          name={"qwik"}
          logo={qwikLogo}
          alt={libraries.qwik.name}
          url={libraries.qwik.url}
        />
        <Card
          name={"angular"}
          logo={angularLogo}
          alt={libraries.angular.name}
          url={libraries.angular.url}
        />
      </div>
    </>
  );
}

export default App;
