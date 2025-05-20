import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { AddToCart } from '../Redux/AddtoCartSlice';
import { fetchProducts, openpage } from '../Redux/NavProdSlice';
import ProductCard from './ProductCard';
import { Helmet } from 'react-helmet';

const CategoryPage = () => {
  const stateofstore = useSelector((state) => state.navProdMenu.allproducts);
  const { prds } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    if (!stateofstore.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, stateofstore]);

  useEffect(() => {
    const newFilter = stateofstore.filter((items) => items.category === prds);
    setitemsdisplay(newFilter);
  }, [stateofstore, prds]);

  // eslint-disable-next-line eqeqeq
  let newfilter = stateofstore.filter((items) => items.category == prds);
  let [itemsdisplay, setitemsdisplay] = useState(newfilter);

  let setConditions = {
    '10% Off or More': (items) => items.discount >= 10,
    '20% Off or More': (items) => items.discount >= 20,
    '30% Off or More': (items) => items.discount >= 30,
    '40% Off or More': (items) => items.discount >= 40,
    '50% Off or More': (items) => items.discount >= 50,
    'Under ₹500': (items) => items.price <= 500,
    '₹500 - ₹1,000': (items) => items.price >= 500 && items.price < 1000,
    '₹1,000 - ₹2,000': (items) => items.price >= 500 && items.price < 1000,
    '₹2,000 - ₹3,000': (items) => items.price >= 500 && items.price < 1000,
    'Over ₹3,000': (items) => items.price >= 3000,
  };

  const handleClick = (items) => {
    let tempstore = newfilter.filter(setConditions[items]);
    setitemsdisplay(tempstore);
  };

  let sortConditions = {
    'Price -- Low to High': (a, b) => a.price - b.price,
    'Price -- High to Low': (a, b) => b.price - a.price,
    'Newest First': (a, b) => b.id - a.id,
  };

  let sortConditionsHandler = (items) => {
    let tempstore = newfilter.sort(sortConditions[items]);
    setitemsdisplay(tempstore);
  };

  return (
    <>
      {prds === 'Eco-Activewear' && (
        <Helmet>
          {/* Basic SEO */}
          <title>
            Eco-Activewear – Nesture: Sustainable Shopping, Our Mission & Team
          </title>
          <meta
            name="description"
            content="Discover Nesture’s story, our mission to make eco-friendly living accessible, and the passionate team behind your favorite sustainable shopping destination."
          />
          <meta
            name="keywords"
            content="Nesture About Us, sustainable shopping mission, eco-friendly team, green lifestyle story"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://nesture.web.app/activewear" />
        </Helmet>
      )}{' '}
      <div className="flex w-full flex-col overflow-hidden relative top-20 mb-64 h-full">
        <header className="relative h-72 w-[97%] flex items-center justify-center shadow-md rounded-3xl mx-auto pl-20 ">
          <h1
            className="text-[#E3E6EA] bg-clip-text text-transparent bg-cover bg-center text-7xl font-bold tracking-wide p-3 "
            style={{ backgroundImage: `url('/${prds}.jpg')` }}
          >
            {prds}
          </h1>
        </header>

        <main className="flex min-h-screen mb-96">
          <aside className="relative w-1/4 left-2">
            <div className="w-80 m-5 h-10">
              <div className="flex flex-col gap-5 bg-[#E3E6EA] rounded-2xl shadow-lg ">
                <div className="text-lg p-3 -mb-5">Discount</div>
                <div className="flex flex-wrap gap-2 m-1">
                  {[
                    '10% Off or More',
                    '20% Off or More',
                    '30% Off or More',
                    '40% Off or More',
                    '50% Off or More',
                  ].map((items) => {
                    return (
                      <button
                        className="p-2 mx-1 bg-[#009b7e] hover:bg-[#00765e] text-white rounded-3xl text-sm"
                        key={items}
                        onClick={() => handleClick(items)}
                      >
                        {items}
                      </button>
                    );
                  })}
                </div>

                <div className="text-lg p-3 -mb-5">Price</div>
                <div className="flex flex-col items-start gap-1 ml-3">
                  {[
                    'Under ₹500',
                    '₹500 - ₹1,000',
                    '₹1,000 - ₹2,000',
                    '₹2,000 - ₹3,000',
                    'Over ₹3,000',
                  ].map((items) => {
                    return (
                      <button
                        className="hover:text-[#009b7e]"
                        key={items}
                        onClick={() => handleClick(items)}
                      >
                        {items}
                      </button>
                    );
                  })}
                </div>

                <div className="text-lg p-3 -mb-5 ">Sort by</div>
                <div className="flex flex-col items-start gap-1 ml-3">
                  {[
                    'Price -- Low to High',
                    'Price -- High to Low',
                    'Newest First',
                  ].map((items) => {
                    return (
                      <button
                        className="hover:text-[#009b7e]"
                        key={items}
                        onClick={() => sortConditionsHandler(items)}
                      >
                        {items}
                      </button>
                    );
                  })}
                </div>

                <button
                  className="text-white p-2 m-1 hover:bg-[#00765e] hover:text-white rounded-2xl bg-[#009b7e]"
                  onClick={() => {
                    setitemsdisplay(newfilter);
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          <section className="absolute flex items-center flex-wrap gap-6 m-5 left-[24%]">
            <div className="flex flex-wrap gap-4 relative h-full items-start">
              {itemsdisplay.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={`/category/${item.category}/${item.id}`}
                  >
                    <ProductCard item={item} />
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CategoryPage;
