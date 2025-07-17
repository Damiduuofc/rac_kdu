import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Team from "./components/Team";
import Contact from "./components/Contact";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <Contact />
              <StarsCanvas />
            </>
          } />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
