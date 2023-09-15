import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

const Home = () => {
  const getLastBlogPostLink = () => (
    "greatest blog"
  )
  return (
    <>
      <video autoPlay> {/* adauga clase in css pentru marime si overlap*/}
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      <h1> 
        Explore {/* Stacked on video */}
      </h1>
      <p>
        What's in Space?
        ceva paragraf despre site
      </p>
      <p>
        Informatii, Informatii
      </p>
      <a href={getLastBlogPostLink()}> Last Blog Post</a>
    </>
  )
};

const Blogs = () => {
  const Blog = () => {
    return (
      <>
        <h1>
          Blog Title
        </h1>
        <p>
          Blog Paragraph
        </p>
        <img src="https://www.w3schools.com/images/img_fullaccess_up_300.png"
          alt="Meaningful text"  
        >
        </img>
      </>
    )
  }
  return (
    <>
      <Blog />
    </>
  )
}

const About = () => <h1>About</h1>;

const Contact = () => <h1>Contact</h1>;

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button>
            <Link to="/" className="navbar-logo">
              Home
            </Link>
          </button>
          <button>
            <Link to="/blogs" className="navbar-logo">
              Blog Posts
            </Link>
          </button>
          <button>
            <Link to="/about" className="navbar-logo">
              About The Website
            </Link>
          </button>
          <button>
            <Link to="/contact" className="navbar-logo">
              Contact
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
export default App;
