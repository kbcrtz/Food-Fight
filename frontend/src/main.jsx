import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Bracket from './pages/bracket.jsx';
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import { YelpProvider } from './context/YelpContext.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>
},
{
  path: "/bracket",
  element: <Bracket />
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <YelpProvider>
    <RouterProvider router={router} />
    </YelpProvider>
  </StrictMode>,
)
