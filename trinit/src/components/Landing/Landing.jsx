import Header from "../Header/Header";
import imagesrc from "./landing.png";

function Landing() {
  return (
    <>
      <Header />
      <main>
        <div className="some-thing">
          <div className="Heading">Microloans at your fingertips</div>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibul ante vitae risus laoreet, id interdum sapien fermentum.
            Nulla facilisi. Phasellus lobortis vehicula arcu, id viverra ligula
            tempor vel. Quisque malesuada, velit a fringilla gravida, mauris leo
            fermentum dolor, nec.
          </div>
          <img src={imagesrc} alt="image" />
        </div>
      </main>
    </>
  );
}

export default Landing;
