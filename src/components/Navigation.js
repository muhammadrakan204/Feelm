import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <h1>Feelm</h1>
      <form>
        <div className="container-form">
          <input type="text" placeholder="Search" />
          <a href="">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </form>
    </nav>
  );
};

export default Navigation;
