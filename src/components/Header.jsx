import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Great Zone</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/post">
            <li>Posts</li>
          </Link>
          <li>
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-linkedin"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
