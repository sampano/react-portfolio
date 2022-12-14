import "./about.css";
import ME from "../../assets/me-about.jpg";
import { BsAward } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sam Pano's Picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Years Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nisi
            quaerat vel cum quidem sapiente amet neque fuga eaque. Tenetur
            libero ducimus soluta ab nam, laudantium veniam quas deserunt
            doloremque laborum nostrum sint dolore quidem reiciendis doloribus
            eligendi dolor totam laboriosam! Vitae ea neque repudiandae, alias
            consectetur cumque saepe facere.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
