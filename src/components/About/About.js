import "./About.css";
import me from "../../images/me.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__overlay">
        <img className="about__author" alt="Author" src={me} />
        <div className="about__content-overlay">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hello,my name is Maty Tsoraro. I'm a committed professional with a strong work ethic and a knack for balancing various responsibilities. Having studied electronics engineering in the past, I've recently dived into a full-stack development course to further diversify my skill set. This journey has reinforced my adaptability and passion for continuous learning.
          </p>
          <p className="about__description">
            Outside the office, family is my anchor, and I value the time spent with my wife and three kids. Whether it's tinkering with tech gadgets or exploring new efficiencies in my daily routine, I'm always on the hunt for ways to grow and contribute more effectively to any project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
