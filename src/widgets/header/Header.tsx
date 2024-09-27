import { memo } from "react";

const Header = memo(function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
