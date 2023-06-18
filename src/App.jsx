import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Slider from "./components/Slider"

import Home from "./pages/Home" 
import SignIn from "./pages/SignIn" 
import SignUp from "./pages/SignUp" 
// import ForgotPassword from "./pages/ForgotPassword" 

function App() {
  const Layout = () => {                         
    return(
            <div className="flex w-full h-screen overflow-y-hidden">
              <div className="h-full w-[50%] hidden lg:flex bg-background">
              <Slider />
              </div>
              <div className= "h-full w-full flex justify-center items-center">
                <Outlet />
              </div>  
            </div>
      )
    }

  const router = createBrowserRouter([
    {
      path: "/signin",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/signin",
          element: <SignIn />
        },
        // {
        //   path: "/signin/forgot",
        //   element: <ForgotPassword />
        // },
        {
          path: "/signin/create",
          element: <SignUp />
        }
      ]
    },
    {
      path: "/",
      element: <Home />,
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
