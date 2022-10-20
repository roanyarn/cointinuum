import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Solutions from '../pages/Solutions/Solutions';
import Layout from '../components/Layout/Layout';
import Connect from '../pages/Connect/Connect';
import Invest from '../pages/Invest/Invest';
import FAQ from '../pages/FAQ/FAQ';
import Bounty from '../pages/Bounty/Bounty';

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
          <Route path="/bounty" element={<Bounty />} />
        </Routes>
      </Layout>
    </HashRouter>
    //</BrowserRouter>
  );
};

export default AppRouter;
