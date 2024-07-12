
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBlog from './pages/AddBlog';
import AddProjects from './pages/AddProjects';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/my-portfolio" element={<Home/>} /> */}
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
          <Route path="/add-blog" element={<AddBlog/>} />
          <Route path="/add-project" element={<AddProjects/>} />
          <Route path="/contact" element={<ContactPage/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
