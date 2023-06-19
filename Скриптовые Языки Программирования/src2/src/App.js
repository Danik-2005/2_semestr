import Clock from "./components/Clock";
import JobMenu from "./components/JobMenu";
import "./styles/global.css"

export default function App() {
  return (
    <div className="main-container">
      <Clock/>
      <br/>
      <JobMenu/>
    </div>  
  );
}