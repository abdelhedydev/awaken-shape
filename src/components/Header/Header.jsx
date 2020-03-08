import HeaderWrapper from './HeaderWrapper'


const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header__container">
        <div className="header__info">
          <img
            src="https://image.flaticon.com/icons/svg/2519/2519082.svg"
            alt=""
          />
          <h1>Awaken Shape</h1>
        </div>
        <div>
          <nav>
            <a>Our Team</a>
            <a>Training</a>
            <a>Nutrition</a>
            <a>Nutrition</a>
            <a>Store</a>
            <a>Blog</a>
          </nav>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
