import './NavigationBar.css';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">
        Questions
      </NavLink>
      <NavLink to="/notice" activeClassName="active">
        Notice
      </NavLink>
      <NavLink to="/question-form" className="add_button" activeClassName="active">
        Add
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
