import { RouterProvider } from 'react-router-dom';
import router from './routes';
import ProductList from './views/ProductList';

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <ProductList/>
    </div>
  );
}

export default App;