import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

/* 
Create React App doesn't include page routing.
React Router is the most popular solution.

React Router, which is a library for handling navigation between different components (pages) in a single-page application (SPA). 

Add React Router
npm i -D react-router-dom


Folder Structure
To create an application with multiple page routes, let's first start with the file structure.
Within the src folder, we'll create a folder named pages with several files - src\pages\

The routing structure is set up with the BrowserRouter to manage the URL changes.
The root route (/) uses the Layout component to wrap the content.
Within the Layout, there are several child routes:
/ renders the Home component.
/blogs renders the Blogs component.
/contact renders the Contact component.
Any unmatched paths will render the NoPage component, typically for a 404 error page.
*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
