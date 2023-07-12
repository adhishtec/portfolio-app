import Typography from "@mui/material/Typography";
import myphoto from "../../assets/myphoto.png";
import "./about.scss";
const About = () => {
  return (
    <>
      <div className="about-main-body">
        <div className="about-top-content">
          <div className="about-photo">
            <img src={myphoto} className="about-photo" />
          </div>
          <div className="about-title">About Me..!</div>
        </div>
        <div className="about-bottom-content">
          <p>Welcome to my Frontend Profile Website!</p>
          <p>
            I'm Adhish, a passionate frontend developer with a love for creating
            immersive web experiences. With a keen eye for aesthetics and a
            dedication to crafting seamless user interfaces, I strive to bring
            ideas to life through the power of code.
          </p>
          <p>
            As a frontend developer, I specialize in HTML, CSS, and JavaScript,
            the building blocks of the modern web. I believe that great design
            goes hand in hand with exceptional functionality, and I am committed
            to delivering user-friendly websites that not only look stunning but
            also provide a seamless browsing experience.
          </p>
          <p>
            This web site is also developed in react js, javascript using Mui
            html framwork. I developed this website to showcase my work and
            portfolio. I am also creating web api in node and mongodb for the
            database. So very soon I will make it live since looking for the
            server for the backend.
          </p>
          <p>
            Thank you for visiting my Frontend Profile Website. I invite you to
            explore my portfolio and get in touch if you have a project in mind.
            Together, we can create a digital experience that leaves a lasting
            impression.
          </p>
          <p>Phone: +49 15510132051</p>
          <p>Email: adhishnigam@gmail.com</p>
        </div>
      </div>
    </>
  );
};
export default About;
