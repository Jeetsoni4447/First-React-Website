import { createBrowserRouter } from "react-router-dom";
import App from "./src/App.jsx";
import HomePage from "./src/views/HomePage/HomePage.jsx";
import Contact from "./src/views/Contact/Contact.jsx";
import Packages from "./src/views/Packages/Packages.jsx";
import Forbooking from "./src/views/Forbooking/Forbooking.jsx";
import Payonline from "./src/views/Payonline/Payonline.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "contact", element: <Contact /> },
            { path: "packages", element: <Packages /> },
            { path: "forbooking", element: <Forbooking /> },
            { path: "payonline", element: <Payonline /> },
        ],
    },
]);

export default router;