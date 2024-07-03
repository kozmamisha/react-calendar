import { monthsName } from '../../App';
import './header.scss';

export interface HeaderProps {
  month: monthsName;
  year: number;
  onClickBack: () => void;
  onClickNext: () => void;
  onClickToday: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <nav className="header__navigation">
        <button onClick={props.onClickToday}>Today</button>
        <button onClick={props.onClickBack}>Back</button>
        <button onClick={props.onClickNext}>Next</button>
      </nav>
      <p>
        {props.month} {props.year}
      </p>
      <nav className="header__options">
        <button>Day</button>
        <button>Agenda</button>
        <button>Work week</button>
        <button>Month</button>
      </nav>
    </div>
  );
};

export default Header;
