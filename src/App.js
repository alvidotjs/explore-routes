import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Header from './component/Header/Header';
import Products from './component/Products/Products';
import Main from './Layout/Main';
import Friends from './component/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    { path: '/',
      element: <Main></Main>,
      children: [
        {path: '/home', element: <Home></Home>},
        {path: '/about', element: <About></About>},
        {path: '/friends',
          loader: async()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
        element: <Friends></Friends>}
      ]
    },
    
    {path: '/products', element: <Products></Products>},
    {path: '*', element: <div>404 not found!</div>}
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
