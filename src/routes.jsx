import App from "./App";
import { CartPage } from "./components/pages/CartPage";
import { HomePage } from "./components/pages/HomePage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { ShopPage } from "./components/pages/ShopPage";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "shop",
                element: <ShopPage />
            },
            {
                path: "cart",
                element: <CartPage />
            }
        ],
        errorElement: <NotFoundPage />
    }
]

export default routes;