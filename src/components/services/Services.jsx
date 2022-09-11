import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";
const Services = () => {
  return (
    <section>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        {/*END OF UI/UX*/}

        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        {/*END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="services__head">
            <h3>Cotent Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
