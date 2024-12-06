// import NewsLetter from "./NewsLetter";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-auto mb-20">
        <picture>
          <source srcSet="/HeroImgs/Hero-desktop-xl.png" media="(min-width: 1624px)" />
          <source srcSet="/HeroImgs/Hero-desktop.png" media="(min-width: 1024px)" />
          <source srcSet="/HeroImgs/Hero-tablet.png" media="(min-width: 434px)" />
          <source srcSet="/HeroImgs/Hero-tablet-small.png" media="(min-width: 640px)" />
          <img
            src="/HeroImgs/Hero-mobile.png"
            alt="Hero"
            className="w-full sm:h-auto h-full object-contain sm:object-cover"
            loading="lazy"
          />
        </picture>
      </div>

      {/* <NewsLetter /> */}
    </>
  );
};

export default Hero;
