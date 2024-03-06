/* eslint-disable react/no-unescaped-entities */
import "../styles/about-section.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>

      <div className="about-text">
        <p>
          Hi! I’m Stephen, a third year Business Information Technology student
          based in Helsinki. I major in Software Development and minor in
          Digital Service Design. As I near graduation, I am on the lookout for
          internships or junior positions to kickstart my career. Beyond that,
          my goal is to stay up-to-date with current practices and technologies
          and continue challenging myself as personal growth never stops.
        </p>
        <p>
          My journey into software development began when I was preparing to
          move to Finland. I was looking to change careers when a friend asked
          if I knew anything about programming and if I could try to make him
          something using JUCE, a C++ framework for making audio plug-ins. While
          I didn't know enough to make what he was requesting at the time, the
          task ignited a sense of curiosity that lead me to where I am now.
          Since then, I have discovered a deep satisfaction in the challenging
          and exciting space that is web and software development.
        </p>
        <p>
          If you share my enthusiasm, feel free to explore my portfolio, GitHub,
          and CV at the top. Let's connect—whether it's about opportunities or a
          shared love for coding, you're welcome to reach out to me on LinkedIn
          or you can send me an email using the contact form below!
        </p>
      </div>
    </div>
  );
};

export default About;
