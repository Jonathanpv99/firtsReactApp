import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import ContactPage from "../Pages/ContactPage";
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        //errorElement: <Error404/>
    },
    {
        path: '/about',
        element: <AboutPage/>,
    },
    {
        path: '/services',
        element: <ServicesPage/>,
       
    },
    {
        path: '/contact',
        element: <ContactPage/>,
       
    }
])
const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;