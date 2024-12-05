const Hero = () => {
  return (
    <div className="relative w-full" style={{ minHeight: "calc(100vh - 112px)" }}>
      <picture>
        <source srcSet="/HeroImgs/Hero-desktop-xl.png" media="(min-width: 1624px)" />
        <source srcSet="/HeroImgs/Hero-desktop.png" media="(min-width: 1024px)" />
        <source srcSet="/HeroImgs/Hero-tablet.png" media="(min-width: 434px)" />
        <source srcSet="/HeroImgs/Hero-tablet-small.png" media="(min-width: 640px)" />
        <img
          src="/HeroImgs/Hero-mobile.png"
          alt="Hero"
          className="mx-auto"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default Hero;
