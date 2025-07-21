import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import {BrowserRouter,Route,Routes} from 'react-router-dom';

export default function App() {
  return (
    <div className="App max-w-[92%] items-center mx-auto">
      <BrowserRouter>

        <Navbar />
        <Routes><Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}