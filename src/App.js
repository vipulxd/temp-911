import './App.css';
import {Navigate, Route, Routes} from "react-router";
import {Main} from "./pages/main";
import {Cart} from "./pages/cart";
import {Checkout} from "./pages/checkout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/main"/>}/>
        <Route path="/main" element={<Main/>} />
        <Route path={"/cart"}
               element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<Navigate to="/main"/>}/>
      </Routes>

  );
}

export default App;
