import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen } from './home/screens/home-screen.jsx';
import { MoreInformation } from './Components/MoreInformation.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>
  },
  {
    path: "/areas-deportivas/:id",
    element: <MoreInformation/>
  },
]);
function App() {
  const [Menu, setMenu] = useState(false)

  const MenuNav = () =>{
    setMenu(!Menu);
  };
  return (
    <>    
    <RouterProvider router={router} />
    </>
  )
}

export default App




