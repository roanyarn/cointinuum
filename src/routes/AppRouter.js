import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Solutions from '../pages/Solutions/Solutions';
import Layout from '../components/Layout/Layout';
import Connect from '../pages/Connect/Connect';
import Invest from '../pages/Invest/Invest';
import FAQ from '../pages/FAQ/FAQ';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const AppRouter = () => {
  return (
    //<BrowserRouter>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/investments" element={<Invest />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </HashRouter>
    //</BrowserRouter>
  );
};

export default AppRouter;
