import './App.css';
import router from './routes';
import {RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </Provider>
  );
}

export default App;

