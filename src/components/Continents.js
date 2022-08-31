import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import continentsData from '../data/data';
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
        {continentsData.map(({ id, name, image }) => (
          <li key={id}>
            {name}
            <img src={image} alt="awesome" />
            <Link to={`/${name}`}>
              <button type="button" onClick={() => handleClick(name)}>
                <BsFillArrowRightCircleFill />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
