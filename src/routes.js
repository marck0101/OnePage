import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Header/home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header id="menu"/>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
