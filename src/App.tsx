import HomePage from "./component/homepage";
import Login from "./component/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import SecondPage from "./component/secondpage";

export default function App() {
  const name = useSelector((state: RootState) => state.user.name);
  const phoneNumber = useSelector((state: RootState) => state.user.phoneNumber);
  const email = useSelector((state: RootState) => state.user.email);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {name && phoneNumber && email && (
          <Route path="/homepage" element={<HomePage />} />
        )}
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}
