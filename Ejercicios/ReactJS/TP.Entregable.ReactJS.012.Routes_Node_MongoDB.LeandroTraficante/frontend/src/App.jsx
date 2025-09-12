import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404NotFound from './components/Page404NotFound';
import ConvertPage from './pages/ConvertPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header></Header>
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<Page404NotFound />}></Route>
            <Route path='/convert' element={<ConvertPage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
            <Route path='/gallery' element={<GalleryPage />}></Route>
            <Route path='/skills' element={<SkillsPage />}></Route>
            <Route path='/projects' element={<ProjectsPage />}></Route>
          </Routes>
        </Container>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default App
