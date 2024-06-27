import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch, createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom";


import './App.css';
import Nav from './nav/Nav';
import Main from './main/Main';



function App() {
  return(
     <div>

      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path ="/" element={<Main />} />
      </Routes>
    
  </BrowserRouter>
     </div>
  
  

  )
/*  return (
  <BrowserRouter>
    <Routes>
      <Route path ="nav" element={<Nav />} />
    </Routes>
  </BrowserRouter>
  );
  *********************************************************
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
    },
    {
      path: "/Main",
      element: <Main />,
    },
  ]);
<Routes>
       
        <Route path="Main" element={<Main />} />

      
    </Routes>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  */
}



export default App;
