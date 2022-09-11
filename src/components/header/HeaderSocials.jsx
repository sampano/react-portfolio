import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="__blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="__blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
