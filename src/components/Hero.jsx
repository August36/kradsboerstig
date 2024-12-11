const Hero = () => {
  return (
    <>
      <div className="relative w-full lg:mb-10 lg:mt-10 flex justify-center">
        <div className="relative lg:w-[920px] lg:h-[600px] xl:w-[920px] xl:h-[600px]">
          <picture className="block relative w-full h-full">
            {/* <source srcSet="/HeroImgs/Hero-desktop-xl.png" media="(min-width: 1624px)" /> */}
            <source
              srcSet="/HeroImgs/Hero-desktop.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/HeroImgs/Hero-tablet.png"
              media="(min-width: 434px)"
            />
            <source
              srcSet="/HeroImgs/Hero-tablet-small.png"
              media="(min-width: 640px)"
            />
            <img
              src="/HeroImgs/Hero-mobile.png"
              alt="Hero"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>

          {/* Over lay and text */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-center px-4">
              Kell Jarner
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
