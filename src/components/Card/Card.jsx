import CardWrapper from "./CardWrapper";

const Header = ({ img, title, description }) => {
  return (
    <CardWrapper>
      <img src={img} alt="" />
      <a>
        <h2>{title}</h2>
        <p>
          Learn the best ways to coach your clients on eating and living better.
          Boost your credentials. Become a better coach. Learn how to change
          lives.
        </p>
      </a>
    </CardWrapper>
  );
};

export default Header;
