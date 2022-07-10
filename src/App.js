
import './App.css';
import{Route, Routes,BrowserRouter} from "react-router-dom";
import Header from './componants/Header';
import ProductListing from './componants/ProductListing';
import ProductDetails from './componants/ProductDetails';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails/>} />
          {/* <Route path='*' element={<PageNotFound />}/>
           */}
        </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
