import "./About.css";
<<<<<<< HEAD
import GraceCAbudi from "../../images/author-chen.jpg";
=======
import me from "../../images/me.jpg";
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6

const About = () => {
  return (
    <section className="about">
      <div className="about__overlay">
<<<<<<< HEAD
        <img className="about__author" alt="Author" src={GraceCAbudi} />
        <div className="about__content-overlay">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Grace (Chen) Abudi is an artist and a recent full-stack developer.
            She has experience developing both frontend and backend along
            dealing with server database including the technologies M.E.R.N
            stack, JavaScript, HTML, CSS.
          </p>
          <p className="about__description">
            The soon to be alumni of Practicum Software Engineer program, has a
            competence for creating elegant solutions efficiently with the
            ability of solving problems with logic, art, and technology. Feel
            Free to reach out through Social Media down below ➘
=======
        <img className="about__author" alt="Author" src={me} />
        <div className="about__content-overlay">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hello,my name is Maty Tsoraro. I'm a committed professional with a strong work ethic and a knack for balancing various responsibilities. Having studied electronics engineering in the past, I've recently dived into a full-stack development course to further diversify my skill set. This journey has reinforced my adaptability and passion for continuous learning.
          </p>
          <p className="about__description">
            Outside the office, family is my anchor, and I value the time spent with my wife and three kids. Whether it's tinkering with tech gadgets or exploring new efficiencies in my daily routine, I'm always on the hunt for ways to grow and contribute more effectively to any project I undertake.
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
