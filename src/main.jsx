// import './styles/global.css';
import './styles/tailwind.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
// import './styles/global.css';
import './styles/tailwind.css'
=======
>>>>>>> 52fafd27fd4cef51f4cbb78c76b4b2469fc65f48

// ReactDOMRoot { render, unmount }
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Virtual DOM (React Element Tree : React Created) */}
  </StrictMode>
);

// rendering → mount (DOM)
