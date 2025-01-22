import SliderHomepage from '../Functionality/sliderHomepage';
import NavbarButtons from '../Functionality/NavbarButtons';
import { Link } from 'react-router-dom';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { AddToCart } from '../Redux/AddtoCartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import ProductCard from '../Products/ProductCard';

const Homepage = () => {
  let AllProducts = useSelector((state) => state.navProdMenu.allproducts);
  let dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>
          Nesture: Your Eco-Friendly Shopping Destination for Sustainable Living
        </title>
        <meta
          name="description"
          content="Shop eco-friendly essentials at Nesture. Discover sustainable clothing, eco-conscious products, and more. Join the green movement!"
        />
        <meta
          name="keywords"
          content="eco-friendly products, sustainable shopping, green lifestyle, eco-conscious essentials, sustainable fashion"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nesture.web.app" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Nesture - Your Eco-Friendly Shopping Destination",
        "url": "https://nesture.web.app",
        "description": "Shop eco-friendly essentials at Nesture. Discover sustainable clothing, eco-conscious products, and more.",
        "publisher": {
          "@type": "Organization",
          "name": "Nesture",
          "logo": "https://nesture.web.app/nesture-tr-main.png"
        },
        "mainEntityOfPage": "https://nesture.web.app"
      }
    `}
        </script>
      </Helmet>
      <div className="overflow-hidden relative">
        <SliderHomepage />{' '}
        <div className="flex justify-center items-center p-3 text-xs lg:text-base">
          <Link to="/all-products">
            <button className="bg-[#009b7e] text-white tracking-wide text-xs lg:text-base px-[22px] py-3 rounded-3xl mx-1 relative hover:bg-[#00765e] hover:text-white shadow-sm">
              All Products
            </button>
          </Link>
          <NavbarButtons
            classNameChild={
              'bg-[#F6F6F6] tracking-wide text-xs px-[11px] py-3 rounded-3xl mx-1 my-1 relative hover:bg-[#00765e] hover:text-white shadow-lg lg:hidden'
            }
            classNameContainer={'flex gap-4 lg:hidden mx-4'}
          />
          <NavbarButtons
            classNameChild={
              'bg-white tracking-wide px-[11px] py-3 rounded-3xl mx-1 my-1 relative hover:bg-[#00765e] hover:text-white shadow-lg'
            }
            classNameContainer={'hidden lg:block'}
          />
        </div>
        <div className="flex flex-wrap gap-6 justify-center p-6 min-h-screen">
          {AllProducts.map((item) => {
            return (
              <Link key={item.id} to={`/category/${item.category}/${item.id}`}>
                <ProductCard item={item} />{' '}
              </Link>
            );
          })}
        </div>
        <section className="w-full h-[650px] bg-white px-8 -mb-10">
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
                  Stay cozy and find everything you need right here at Nesture.
                  From sustainable clothing to eco-friendly essentials, we've
                  got you covered—all at the click of a button. Whether you have
                  a question, need advice, or just want to share your thoughts,
                  we’d love to hear from you.{' '}
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
      </div>
    </>
  );
};

export default Homepage;
