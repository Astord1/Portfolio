import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Me from "./pages/me/Me";
import Contact from "./pages/contact/form/Contact";
import NotFound from "./pages/notFound/NotFound";
import Projects from "./pages/projects/Projects";

const router = createBrowserRouter(createRoutesFromElements(<Route element = {<RootLayout />} errorElement={<NotFound />}>
  <Route path = "/" element={<Me />}/>
  <Route path = "/contact" element={<Contact />} />
  <Route path = "/projects" element={<Projects />} />
</Route>))
function App() {

  return (
    <RouterProvider router = {router} />
  )
}

export default App
