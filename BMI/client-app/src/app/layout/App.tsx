import { ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../../features/home/HomePage';

function App() {
  return (
    <>
      <ScrollRestoration />
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <HomePage />
    </>
  );
}

export default App;
