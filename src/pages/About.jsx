const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-5 m-10 space-y-5 md:space-y-0 md:space-x-10">
      <img
        src="BW_Kell-Jarner-Kunst.jpg"
        alt="Profile"
        className="w-80 h-30"
      />
      <div className="flex-1 max-w-3xl space-y-5 md:text-left">
        <h1 className="text-xl font-bold">Om mig</h1>
        <p className="text-base leading-relaxed">
          Mit navn er Kell Jarner Rasmussen. Jeg har altid malet, i mange år om
          natten, i ferier og i kælderen. Af profession er jeg retoriker, men
          maleriet kalder, og i 2022 gik jeg på deltid i min retorikvirksomhed
          og etablerede Galleri Krasbørstig på Frederiksberg. Her maler jeg i
          baglokalet og holder jævnlige udstillinger, ofte sammen med andre
          kunstnere.
        </p>
        <p className="text-base leading-relaxed">
          Du er altid velkommen til at kigge ind i Galleri Krasbørstig,
          Smallegade 52b, st.tv. Åbningstiderne er:
        </p>
        <ol className="list-disc list-inside text-base leading-relaxed">
          <li>Torsdag kl. 12-18</li>
          <li>Fredag kl. 17-19</li>
          <li>Lørdag kl. 12-16</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
