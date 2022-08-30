import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useParams } from 'react-router';
import continents from '../data/data';
import { getCountries } from '../redux/countries/countries';
// import '../styles/continents.scss';

const Continents = () => {
  const { idName } = useParams();
  const dispatch = useDispatch();
  const countriesOfContinent = useSelector((state) => state.countries);
  console.log('fdfd', countriesOfContinent);
  const handleClick = (name) => {
    dispatch(getCountries(name, idName));
  };

  return (
    <div>
      <ul className="continents">
        {continents.map(({ id, name, image }) => (
          <li key={id}>
            {name}
            <img src={image} alt="awesome" />
            <button type="button" onClick={() => handleClick(name)}>
              <BsFillArrowRightSquareFill />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
