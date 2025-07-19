import { createBrowserRouter } from "react-router-dom";
import App from "./src/App.jsx";
import HomePage from "./src/view/HomePage/HomePage.jsx";
import Contact from "./src/view/Contact/Contact.jsx";
import Packages from "./src/view/Packages/Packages.jsx";
import Forbooking from "./src/view/Packages/Forbooking.jsx";
import Payonline from "./src/view/Payonline/Payonline.jsx";

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