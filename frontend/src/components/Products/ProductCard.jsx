import { useDispatch } from 'react-redux';
import { AddToCart } from '../Redux/AddtoCartSlice';
import { TbShoppingBagPlus } from 'react-icons/tb';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={item.id}
      className="bg-[#E3E6EA] shadow-lg group rounded-3xl overflow-hidden w-full flex flex-col items-center"
    >
      <div className="flex justify-between w-full items-center px-3 py-1">
        <div className="">
          <h2 className="font-semibold m-1">{item.name}</h2>
          {item.discount ? (
            <div key={item.id} className="flex">
              <div className="font-light ml-1 text-sm -mt-1">
                Now at Rs
                {Math.floor(item.price - (item.price * item.discount) / 100)}
              </div>
              <div className="line-through font-light	text-sm -mt-1 ml-1">
                Rs{item.price}
              </div>
            </div>
          ) : (
            <div className="font-light ml-1 text-sm -mt-1">Rs{item.price}</div>
          )}
        </div>
        <div className="rounded-full bg-white h-10 w-10 flex items-center justify-center hover:bg-[#009b7e] hover:text-white shadow-sm">
          <button
            className=""
            onClick={(e) => {
              dispatch(AddToCart(item));
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <TbShoppingBagPlus className="text-lg" />
          </button>
        </div>
      </div>
      <div className="relative p-[5px]">
        <img
          className="h-72 w-72 rounded-3xl"
          src={item.image_url}
          alt={item.name}
        ></img>
        <div className="bg-black inset-0 absolute opacity-0 group-hover:opacity-80 rounded-3xl">
          {item.discount && (
            <div className="text-[#009b7e] top-0 right-0 font-semibold p-2 mr-1 absolute">
              {item.discount}% Off
            </div>
          )}
          <div className="p-5 absolute bottom-0">
            <div className="text-[#009b7e]">{item.category}</div>
            <div className="text-white font-medium">{item.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
