import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="grain" />
        <Navbar />
        <Sidebar />
        <SmoothScroll>
          <Home />
          <Footer />
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;