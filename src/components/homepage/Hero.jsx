import Heroimg from "../images/Heroimg.png";

const Hero = () => {
  return (
    <div>
      <img src={Heroimg} className="absolute h-fit object-cover w-full" alt="" />
      <div className="relative bg-gray-500 bg-opacity-50 p-60">
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-end xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Conheça seu <br className="sm:block hidden " />
                {""}
                <span className="text-gradient">melhor médico</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Sabemos das suas grandes necessidades e vamos resolver em
                pequena escala.
              </p>
              <a
                href="/login"
                aria-label=""
                className=" text-white bg-blue-400 rounded-md p-4 inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Saiba Mais
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
