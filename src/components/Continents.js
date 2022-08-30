import { useDispatch } from 'react-redux';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import continents from '../data/data';
import { getCountries } from '../redux/countries/countries';
// import '../styles/continents.scss';

const Continents = () => {
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(getCountries(name));
  };

  return (
    <div>
      <ul className="continents">
        {continents.map(({ id, name, image }) => (
          <li key={id}>
            {name}
            <img src={image} alt="awesome" />
            <Link to={`/${name}`}>
              <button type="button" onClick={() => handleClick(name)}>
                <BsFillArrowRightSquareFill />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
