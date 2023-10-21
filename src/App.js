import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import store from './Utils/appStore';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorComp from './components/ErrorComp';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Checker from './components/Checker';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorComp />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/checker",
        element: <Checker />
      }
    ]
  }
])

function App() {

  return (
    <Provider store={store}>
      <div >
        <Head />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
