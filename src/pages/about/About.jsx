import './About.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Obcaecati, non? Nam ducimus consequuntur accusantium cumque
      facilis iusto, ratione cum in!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our story"/>
        </div>
        <div className="about__section-content">
          <h1>Our story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam ipsam at facilis, rem illo tenetur eaque quae quod
            voluptas veniam, eos expedita maxime dolorem! Dolorem expedita
            repellendus fugit voluptas, delectus maxime iure.
            Soluta earum eius facilis nemo vero est dolores!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam ipsam at facilis, rem illo tenetur eaque quae quod
            voluptas veniam, eos expedita maxime dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam ipsam at facilis, rem illo tenetur eaque quae quod
            voluptas veniam.
          </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
    <div className="container about__vision-container">
      <div className="about__section-content">
        <h1>Vision</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam ipsam at facilis, rem illo tenetur eaque quae quod
        voluptas veniam, eos expedita maxime dolorem! Dolorem expedita
        repellendus fugit voluptas, delectus maxime iure.
        Soluta earum eius facilis nemo vero est dolores!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam ipsam at facilis, rem illo tenetur eaque quae quod
        voluptas veniam, eos expedita maxime dolorem!
      </p>
    </div>
    <div className="about__section-image">
      <img src={VisionImage} alt="Our vision"/>
    </div>
  </div>
</section>

<section className="about__mission">
    <div className="container about__story-container">
    <div className="about__section-image">
      <img src={MissionImage} alt="Our mission"/>
    </div>
      <div className="about__section-content">
        <h1>Mission</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam ipsam at facilis, rem illo tenetur eaque quae quod
        voluptas veniam, eos expedita maxime dolorem! Dolorem expedita
        repellendus fugit voluptas, delectus maxime iure.
        Soluta earum eius facilis nemo vero est dolores!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam ipsam at facilis, rem illo tenetur eaque quae quod
        voluptas veniam, eos expedita maxime dolorem!
      </p>
    </div>
  </div>
</section>
    </>
  )
}

export default About