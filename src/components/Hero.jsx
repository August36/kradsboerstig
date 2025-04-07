const Hero = () => {
  return (
    <>
      <div className="relative w-full lg:mb-10 lg:mt-10 flex justify-center">
        <div className="relative lg:w-[920px] lg:h-auto xl:w-[920px] xl:h-auto">
          <picture className="block relative w-full h-full shadow-xl rounded-lg">
            <source
              srcSet="/HeroImgs/Hero-desktop.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/HeroImgs/Hero-tablet-small.png"
              media="(min-width: 640px)"
            />
            <source
              srcSet="/HeroImgs/Hero-tablet.png"
              media="(min-width: 434px)"
            />
            <img
              src="/HeroImgs/png/Hero-mobile.png"
              alt="Gallery Hero Image - Kell Jarner"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>

          {/* Overlay and Text */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-center px-4">
              Kell Jarner
            </h1>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
