import Login from "./component/login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Login/>}/>
      </Routes>
    </Router>
  );
}
