import { useDispatch } from 'react-redux';
import { openpage } from '../Redux/NavProdSlice';
import { Link } from 'react-router-dom';

const NavbarButtons = ({ classNameContainer, classNameChild }) => {
  const prodbuttons = [
    'Sustainable Clothing',
    'Eco-Friendly Accessories',
    'Organic Skincare',
    'Reusable Home Essentials',
    'Eco-Activewear',
    'Handcrafted Decor',
    'Natural Wellness Products',
  ];
  const dispatch = useDispatch();

  return (
    <>
      <div className={classNameContainer}>
        {prodbuttons.map((items, index) => {
          return (
            <Link key={index} to={`/category/${items}`}>
              <button
                key={items.id}
                onClick={() => dispatch(openpage(items))}
                className={classNameChild}
              >
                {items}
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavbarButtons;
