import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2'
import Page404NotFound from './components/Page404NotFound';
import Page3 from './pages/Page3';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='page1' element={<Page1 />}></Route>
        <Route path='page2' element={<Page2 />}></Route>
        <Route path='page3' element={<Page3 />}></Route>
        <Route path='*' element={<Page404NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
