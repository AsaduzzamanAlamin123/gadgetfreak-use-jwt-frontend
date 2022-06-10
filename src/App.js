import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Home from './componants/Home/Home';
import Product from './componants/Product/Product';
import UploadProduct from './componants/UploadProduct/UploadProduct';
import OrdersList from "./componants/OrdersList/OrdersList";
import NotFound from "./componants/NotFound/NotFound";
import Login from "./componants/Login/Login";
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/upproduct'element={
        <RequireAuth>
          <UploadProduct></UploadProduct>
        </RequireAuth>
      }></Route>
      <Route path='/orderlist'element={
        <RequireAuth>
          <OrdersList></OrdersList>
        </RequireAuth>
      }></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='*'element={<NotFound></NotFound>}></Route>

    </Routes>
     
    </div>
  );
}

export default App;
