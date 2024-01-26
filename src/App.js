import Form from './form/Form';
import LogIn from './form/LogIn';
import Main from './form/Main'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const route = createBrowserRouter([
    {
      path : '/',
      element: <Form/>
    },
    {
      path : '/logIn',
      element: <LogIn/>
    },
    {
      path : '/mainPage',
      element: <Main/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
