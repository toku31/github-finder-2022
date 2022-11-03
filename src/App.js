import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { GithubProvider } from './context/github/GithubContext';
import { AlerProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';

function App() {
  return (
    <GithubProvider >
      <AlerProvider >
        <Router>
          {/* <div className="bg-gray-300 flex flex-col justify-between h-screen"> */}
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlerProvider>
    </GithubProvider>
  );
}

export default App;
