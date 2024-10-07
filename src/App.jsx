import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Country } from "./components/Country";
import { AppLayout } from "./components/AppLayout";
import { ErrorPage } from "./components/ErrorPage";
import { CountryDetails } from "./components/CountryDetails";
const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      }
    ]
  }


])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
