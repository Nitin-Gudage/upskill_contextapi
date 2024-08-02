import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import ShowCard from './Components/ShowCard';
import Payments from './Components/Payments';
import Layout from './Components/Layout';
import CartContextProvider from './ContextApi/CartContextProvider';
import LoginPage from './Components/HeaderComp/LoginPage';
import SignUp from './Components/HeaderComp/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<ShowCard />} />
      <Route path='payments' element={<Payments />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
