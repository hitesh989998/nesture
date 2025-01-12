/* eslint-disable eqeqeq */
import { useDispatch, useSelector } from 'react-redux';
import {
  TbShoppingBag,
  TbShoppingBagPlus,
  TbShoppingBagMinus,
} from 'react-icons/tb';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  AddToCart,
  RemoveFromCart,
  EditQuantity,
  ClearCart,
} from '../Redux/AddtoCartSlice';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  let dispatch = useDispatch();
  let productdisplay = useSelector((state) => state.navProdMenu.allproducts);
  let { id } = useParams();

  return (
    <>
      <section>
        {productdisplay
          .filter((items) => items.id == id)
          .map((items) => (
            <main className="flex flex-col gap-32">
              <section className="relative flex flex-col lg:flex-row gap-4 items-center justify-center h-[70vh] w-[98%] rounded-3xl mx-6 top-24 bg-[url('/wmremove-transformed.jpeg')] bg-cover bg-center right-2">
                <div
                  key={items.id}
                  className="flex flex-row relative gap-4 items-center justify-center w-full"
                >
                  <section className="relative mt-1 flex flex-col items-center gap-4 backdrop-blur-lg bg-white/10 rounded-3xl h-[450px] w-[370px] justify-center">
                    <figure className="relative h-[300px] w-[300px] mb-1">
                      <img
                        className="rounded-3xl object-cover h-full w-full"
                        src={items.image_url}
                        alt={items.name}
                      />
                    </figure>

                    <figure className="grid grid-cols-4 gap-2">
                      <img
                        className="rounded-2xl object-cover h-[70px] w-[70px] filter grayscale"
                        src={items.image_url}
                        alt={items.name}
                      />
                      <img
                        className="rounded-2xl object-cover h-[70px] w-[70px] filter sepia"
                        src={items.image_url}
                        alt={items.name}
                      />
                      <img
                        className="rounded-2xl object-cover h-[70px] w-[70px] filter saturate-80"
                        src={items.image_url}
                        alt={items.name}
                      />
                      <img
                        className="rounded-2xl object-cover h-[70px] w-[70px] filter invert"
                        src={items.image_url}
                        alt={items.name}
                      />
                    </figure>
                  </section>

                  <section className="flex flex-col gap-4 p-4 bg-white rounded-3xl shadow-2xl backdrop-blur-xl">
                    <h2 className="text-3xl  font-semibold">{items.name}</h2>
                    <p className="text-[#5A5F6A]">{items.description}</p>
                    <div className="text-sm font-medium tracking-wide text-[#009b7e]">
                      {items.category}
                    </div>

                    {items.discount ? (
                      <div className="text-lg font-semibold text-[#00765e]">
                        <div className="line-through text-red-500">
                          Rs {items.price}
                        </div>
                        <div className="text-2xl">
                          Now at Rs{' '}
                          {Math.floor(
                            items.price - (items.price * items.discount) / 100
                          )}
                        </div>
                        <div className="text-lg text-[#00765e]">
                          {items.discount}% Off
                        </div>
                      </div>
                    ) : (
                      <div className="text-2xl mt-2 font-semibold text-gray-800">
                        Rs {items.price}
                      </div>
                    )}

                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => dispatch(AddToCart(items))}
                        className="flex items-center gap-2 bg-[#00765e] text-white hover:bg-[#009b7e] hover:text-white py-2 px-4 rounded-full"
                      >
                        Add to Cart
                        <TbShoppingBag className="text-2xl" />
                      </button>
                      <button
                        onClick={() => dispatch(RemoveFromCart(items))}
                        className="bg-[#F6F6F6] hover:bg-[#E3E6EA] text-gray-800 rounded py-2 px-4"
                      >
                        Remove From Cart
                      </button>
                      <button
                        title="+Edit Quantity"
                        className="bg-[#8FDAC5] hover:bg-[#009b7e] hover:text-white rounded p-2"
                        onClick={() => {
                          dispatch(
                            EditQuantity({ item: items, quantityChange: 1 })
                          );
                        }}
                      >
                        <TbShoppingBagPlus />
                      </button>
                      <button
                        title="-Edit Quantity"
                        className="bg-[#F6F6F6] hover:bg-[#E3E6EA] hover:text-white rounded p-2"
                        onClick={() => {
                          dispatch(
                            EditQuantity({ item: items, quantityChange: -1 })
                          );
                        }}
                      >
                        <TbShoppingBagMinus />
                      </button>
                      <button
                        title="Clear Cart"
                        className="text-red-400 hover:bg-red-600 hover:text-white rounded p-2"
                        onClick={() => dispatch(ClearCart())}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </section>
                </div>
              </section>
              <section className="mb-10">
                <h2 className="text-3xl text-gray-800 py-5 pl-7 font-semibold">
                  More from{' '}
                  <p className="text-[#009b7e] relative flex">
                    {items.category}
                    <img
                      src="/leaf-nesture.png"
                      className="h-5 w-10 relative -left-7 bottom-2"
                    />
                  </p>
                </h2>
                <section className="relative flex items-center flex-wrap gap-6 m-5 ">
                  {productdisplay
                    .filter(
                      (ele) =>
                        items.category == ele.category && ele.id != items.id
                    )
                    .map((item) => {
                      return (
                        <Link
                          key={item.id}
                          to={`/category/${item.category}/${item.id}`}
                        >
                          {' '}
                          <div
                            key={item.id}
                            className="bg-[#E3E6EA] shadow-lg group rounded-3xl overflow-hidden w-full flex flex-col items-center"
                          >
                            <div className="flex justify-between w-full items-center px-3 py-1">
                              <div className="">
                                <h2 className="font-semibold m-1">
                                  {item.name}
                                </h2>
                                {item.discount ? (
                                  <div key={item.id} className="flex">
                                    <div className="font-light ml-1 text-sm -mt-1">
                                      Now at Rs
                                      {Math.floor(
                                        item.price -
                                          (item.price * item.discount) / 100
                                      )}
                                    </div>
                                    <div className="line-through font-light	text-sm -mt-1 ml-1">
                                      Rs{item.price}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="font-light ml-1 text-sm -mt-1">
                                    Rs{item.price}
                                  </div>
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
                                  <div className="text-[#009b7e]">
                                    {item.category}
                                  </div>
                                  <div className="text-white font-medium">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </section>
              </section>

              <section className="w-full h-[650px] bg-white px-8 mb-10">
                <div className="h-[550px] w-full rounded-[28px] mt-4 drop-shadow-lg bg-center bg-cover bg-[url(/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yOV9waG90b2dyYXBoeV9vZl9hYnN0cmFjdF9kYXJrX3RleHR1cmVfYmFja2dyb182MTM0OWI1ZS1kYzdhLTQ4MTItOGE3MC00OTAwZTNmMjM4ZmVfMS5qcGc.webp)] flex">
                  <div className="">
                    <h3 className="absolute backdrop-blur-lg bg-opacity-90 bg-white rounded-3xl top-1 left-1 p-3 m-3 tracking-wide shadow-lg flex items-center text-lg">
                      Get Your Daily Essentials at{' '}
                      <img
                        className="h-9 w-24 ml-1 mb-[4px]"
                        src="/nesture-tr-main.png"
                        alt=""
                      />
                    </h3>

                    <div className="absolute bottom-0 right-0 p-3 m-3  h-[8rem] w-[49rem] backdrop-blur-md shadow-lg rounded-3xl tracking-wide bg-white bg-opacity-90">
                      <p className="text-base leading-relaxed">
                        Stay cozy and find everything you need right here at
                        Nesture. From sustainable clothing to eco-friendly
                        essentials, we've got you covered—all at the click of a
                        button. Whether you have a question, need advice, or
                        just want to share your thoughts, we’d love to hear from
                        you.{' '}
                      </p>
                      <Link to="/about-us">
                        <button className="bg-[#00765e] hover:bg-[#009b7e] rounded-2xl my-4 text-white p-2 absolute right-3 mb-8 -bottom-6">
                          Get in Touch
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          ))}
      </section>
    </>
  );
};

export default ProductDetailPage;
