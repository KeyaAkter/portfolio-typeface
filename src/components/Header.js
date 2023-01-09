import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  useLinkDownward,
  useLineForward,
  useTextUpward,
  useBoxScaling,
} from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const text6 = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const linkArr = [link1, link2, link3, link4];
  const lineArr = [line1, line2, line3, line4];
  const textArr = [text1, text2, text3, text4, text5, text6];
  const boxArr = [box1, box2, box3];

  useLinkDownward(linkArr);
  useLineForward(lineArr);
  useTextUpward(textArr);
  useBoxScaling(boxArr);

  return (
    <div className="header container">
      {/* 1st row */}
      <div className="row">
        <h2 ref={text1}>
          K<span>e</span>ya
        </h2>
        <h2 ref={text2}>
          Ak<span>te</span>r
        </h2>
      </div>

      <hr ref={line1} />

      {/* 2nd row */}
      <div className="row">
        <span ref={link1}>Font-End Developer</span>
        <a
          ref={link2}
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>

        <a
          ref={link3}
          href="mailto:keyaakter12898@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send Email
        </a>

        <Link ref={link4} to="/contact">
          Contact Me
        </Link>
      </div>

      {/* <hr ref={line2} /> */}

      {/* 3rd row */}

      <div className="row">
        <Link to="/about" className="box about" ref={box1}>
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>

        <h2 ref={text3}>Aspiring</h2>

        <Link to="/projects" className="box projects" ref={box2}>
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr ref={line2} />

      {/* 4th row */}
      <div className="row">
        <h2 ref={text4}>
          Front-E<span>n</span>d Dev<span>el</span>oper
        </h2>
      </div>

      <hr ref={line3} />

      {/* 5th row */}
      <div className="row">
        <h2 ref={text5}>Based</h2>

        <Link to="/skills" className="box skills" ref={box3}>
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>

        <h2 ref={text6}>in Bangladesh</h2>
      </div>

      <hr ref={line4} />
    </div>
  );
};

export default Header;
