import { FaReact, FaNode, FaStripe } from 'react-icons/fa';
import {
  SiRedux,
  SiMongodb,
  SiVite,
  SiJsonwebtokens,
  SiExpress,
  SiTailwindcss,
} from 'react-icons/si';
import { FcAreaChart } from 'react-icons/fc';
import { FaHashnode } from 'react-icons/fa6';
import { FiUploadCloud } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <section className="bg-[#F6F6F6] py-16 px-6 relative top-24 mb-20">
      <Helmet>
        {/* Basic SEO */}
        <title>
          About Us – Nesture: Sustainable Shopping, Our Mission & Team
        </title>
        <meta
          name="description"
          content="Discover Nesture’s story, our mission to make eco‑friendly living accessible, and the passionate team behind your favorite sustainable shopping destination."
        />
        <meta
          name="keywords"
          content="Nesture About Us, sustainable shopping mission, eco‑friendly team, green lifestyle story"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nesture.web.app/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nesture.web.app/about" />
        <meta
          property="og:title"
          content="About Us – Nesture: Sustainable Shopping, Our Mission & Team"
        />
        <meta
          property="og:description"
          content="Meet the Nesture team and learn how we’re making eco‑friendly living easier for everyone."
        />
        <meta
          property="og:image"
          content="https://nesture.web.app/nesture-about-og.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta
          name="twitter:title"
          content="About Us – Nesture: Sustainable Shopping, Our Mission & Team"
        />
        <meta
          name="twitter:description"
          content="Meet the Nesture team and learn how we’re making eco‑friendly living easier for everyone."
        />
        <meta
          name="twitter:image"
          content="https://nesture.web.app/nesture-about-og.png"
        />

        {/* JSON‑LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Us – Nesture',
            url: 'https://nesture.web.app/about',
            description:
              'Discover Nesture’s story, our mission to make eco‑friendly living accessible, and the passionate team behind your sustainable shopping destination.',
            publisher: {
              '@type': 'Organization',
              name: 'Nesture',
              logo: {
                '@type': 'ImageObject',
                url: 'https://nesture.web.app/nesture-logo.png',
              },
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://nesture.web.app/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About Us',
                  item: 'https://nesture.web.app/about',
                },
              ],
            },
            mainEntity: {
              '@type': 'WebPageElement',
              name: 'Team & Mission Section',
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-[#009b7e] mb-6">
          Welcome to Nesture!
        </h1>
        <p className="text-lg text-[#5A5F6A] mb-8">
          Nesture is powered by a collection of cutting-edge technologies that
          ensure a fast, secure, and scalable platform.
        </p>

        {/* Built for the Future Section */}
        <div className="bg-[#009b7e] p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Built to be scaled for the future.
          </h2>
          <p className="text-md text-white">
            Nesture’s advanced tech stack enables us to support thousands of
            concurrent users, processing real-time orders with zero lag. Whether
            you’re shopping for your favorite products or making a purchase,
            Nesture guarantees a smooth and speedy experience every time.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-[#009b7e] mb-8">
            Our Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* React */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#E8F8F7] transition-all duration-300 hover:scale-105">
              <FaReact size={50} color="#61dafb" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                React
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                A fast and responsive frontend, delivering smooth user
                experiences across devices.
              </p>
            </div>

            {/* Redux Toolkit */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#F0E6FF] transition-all duration-300 hover:scale-105">
              <SiRedux size={50} color="#764abc" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Redux Toolkit
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                Efficient state management for complex interactions, providing a
                seamless user journey.
              </p>
            </div>

            {/* Node.js */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#E7F4ED] transition-all duration-300 hover:scale-105">
              <FaNode size={50} color="#68a063" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Node.js
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                A powerful server-side platform for building scalable,
                high-performance applications.
              </p>
            </div>

            {/* Express.js */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#F4F4F4] transition-all duration-300 hover:scale-105">
              <SiExpress size={50} color="#000000" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Express.js
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                A minimalist backend framework that enhances the performance of
                our APIs.
              </p>
            </div>

            {/* MongoDB */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#D1F3C1] transition-all duration-300 hover:scale-105">
              <SiMongodb size={50} color="#4DB33D" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                MongoDB
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                A NoSQL database designed for high availability, scalability,
                and flexibility.
              </p>
            </div>

            {/* Stripe */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#E3ECFE] transition-all duration-300 hover:scale-105">
              <FaStripe size={50} color="#6772e5" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Stripe
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                The world's most advanced payment platform, ensuring secure and
                fast transactions.
              </p>
            </div>

            {/* JWT Authentication */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#F1F1F1] transition-all duration-300 hover:scale-105">
              <SiJsonwebtokens size={50} color="#000000" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                JWT Authentication
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                Secure authentication mechanisms, ensuring safe and encrypted
                user sessions.
              </p>
            </div>

            {/* Bcrypt */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#FFF0D1] transition-all duration-300 hover:scale-105">
              <FaHashnode size={50} color="#f0bc2f" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Bcrypt
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                An advanced encryption library to secure sensitive user data,
                protecting privacy.
              </p>
            </div>

            {/* Multer */}
            <div className="text-center p-6 rounded-lg bg-white transform transition-all duration-300 hover:scale-105 hover:bg-[#E0F7F7]">
              <div className="flex justify-center items-center">
                <FiUploadCloud size={50} color="#5A5F6A" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Multer
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                Middleware for handling multipart/form-data, used for uploading
                files with ease.
              </p>
            </div>

            {/* Vite */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#E7F1FE] transition-all duration-300 hover:scale-105">
              <SiVite size={50} color="#4e7cbf" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Vite
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                An ultra-fast build tool ensuring quick page loads and a smooth
                user experience.
              </p>
            </div>

            {/* Tailwind CSS */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#E5F9FF] transition-all duration-300 hover:scale-105">
              <SiTailwindcss size={50} color="#38bdf8" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Tailwind CSS
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                A utility-first CSS framework for building fast, responsive, and
                customizable designs.
              </p>
            </div>

            {/* Recharts */}
            <div className="text-center p-6 rounded-lg backdrop-blur-md bg-opacity-20 hover:bg-[#D9F9F4] transition-all duration-300 hover:scale-105">
              <FcAreaChart size={50} color="#00ccbb" className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-[#009b7e]">
                Recharts
              </h3>
              <p className="text-[#5A5F6A] mt-2">
                A charting library to display data insights with beautiful and
                customizable charts.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-12 mb-5">
          <h2 className="text-2xl font-semibold text-[#009b7e] mb-4">
            Code That Sparkles ✨
          </h2>
          <p className="text-md text-[#5A5F6A]">
            I write code that is neat, readable, and optimized. Using tools like
            ESLint and Prettier, I ensure everything is perfectly formatted. By
            following the MVC architecture for backend and focusing on layout
            performance for the frontend, I've created a seamless and
            maintainable codebase that powers Nesture.
          </p>
        </div>

        <p className="text-md text-[#5A5F6A] mt-8">
          Full-stack code, where everything works like clockwork, by{' '}
          <span className="font-semibold">Hitesh Lalwani</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
