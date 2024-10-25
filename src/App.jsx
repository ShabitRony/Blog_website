import "./assets/css/style.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<div> Not Found </div>} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <Post /> */}
    </>
  );
};

export default App;
