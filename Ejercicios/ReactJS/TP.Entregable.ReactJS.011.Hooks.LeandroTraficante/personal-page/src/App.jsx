import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404NotFound from './components/Page404NotFound';
import ConvertPage from './pages/ConvertPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ServicePage from './pages/ServicePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return(
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Page404NotFound />}></Route>
        <Route path='/convert' element={<ConvertPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/gallery' element={<GalleryPage />}></Route>
        <Route path='/services' element={<ServicePage />}></Route>
        <Route path='/projects' element={<ProjectsPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
