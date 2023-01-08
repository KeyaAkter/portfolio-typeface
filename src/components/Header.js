import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header container">
      {/* 1st row */}
      <div className="row">
        <h2>
          K<span>e</span>ya
        </h2>
        <h2>
          Ak<span>te</span>r
        </h2>
      </div>

      <hr />

      {/* 2nd row */}
      <div className="row">
        <span>Font-End Developer</span>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          View Resume
        </a>

        <a
          href="mailto:keyaakter12898@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send Email
        </a>

        <Link to="/contact">Contact Me</Link>
      </div>

      <hr />

      {/* 3rd row */}

      <div className="row">
        <Link to="/about" className="box about">
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>

        <h2>Aspiring</h2>

        <Link to="/projects" className="box projects">
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr />

      {/* 4th row */}
      <div className="row">
        <h2>
          Front-E<span>n</span>d Dev<span>el</span>oper
        </h2>
      </div>

      <hr />

      {/* 5th row */}
      <div className="row">
        <h2>Based</h2>

        <Link to="/skills" className="box skills">
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>

        <h2>in Bangladesh</h2>
      </div>

      <hr />
    </div>
  );
};

export default Header;
