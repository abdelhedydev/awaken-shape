import SliderWrapper from "./SliderWrapper";
import ReactSwipe from "react-swipe";
import Card from "../Card";

const Item = ({ img, title, content }) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <div className="item__detail">
        <h2>{title}</h2>
        <p>
          We created the field of exercise nutrition, writing the definitive
          textbook: “The Essentials of Sport and Exercise Nutrition”. Through
          our Level 1 Certification and Level 2 Certification Master Class,
          we’ve helped over 70,000 of the world’s best coaches boost their
          credentials and advance their careers.
        </p>
      </div>
    </div>
  );
};

const Carousel = () => {
  let reactSwipeEl;

  return (
    <SliderWrapper>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <Item
            img="https://www.precisionnutrition.com/wp-content/uploads/2019/08/level_1_v4_-book_ipad_home.png"
            title="Nutrition Certification"
          />
        </div>
        <div>
          <Item
            img="https://www.precisionnutrition.com/wp-content/uploads/2008/07/homepage-online-nutrition-coaching.png"
            title="Online Nutrition Coaching"
          />
        </div>
        <div>
          <Item
            img="https://www.precisionnutrition.com/wp-content/uploads/2008/07/homepage-nutrition-software.png"
            title="Nutrition Software"
          />
        </div>
      </ReactSwipe>
      <div className="slider__action">
        <button onClick={() => reactSwipeEl.next()}>Next</button>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      </div>
      <div>
        <h3>Nutrition Articles</h3>
      </div>
      <div className="cards">
        <Card
          title="Nutrition Precision"
          img="data:image/jpeg;base64,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"
        />
        <Card
          title="ABCD EFR"
          img="https://image.flaticon.com/icons/svg/2307/2307802.svg"
        />
        <Card
          title="Eating BB"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqZ8tUKQ9zJTcZHRuajHnh-tCWSxCp9KrW8w0AhttxCOxGi8t"
        />
      </div>
    </SliderWrapper>
  );
};

export default Carousel;