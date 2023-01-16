import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/products/:id",
    element: <div>Products</div>,
  },
  {
    path: "/product/:id",
    element: <div>Product</div>,
  },
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
