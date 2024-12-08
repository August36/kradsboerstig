const Exhibitions = () => {
    return (
      <div className="max-w-5xl mx-auto mt-10 px-4">
        {/* Header Section */}
        <header className="text-left mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Udstillinger</h1>
        </header>
  
        <section className="bg-white shadow-md rounded-lg p-2 sm:p-8 md:p-8 w-full">
          <div className="flex flex-col lg:flex-row items-start justify-center md:items-center lg:items-start xl:items-start gap-8 mb-12">
            {/* Image Container */}
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 flex justify-center items-start pb-8 lg:pb-0 lg:pr-8">
              <img
                src="/mennesket-i-naturen-udstilling.jpg"
                alt="Udstillingsforhåndsvisning"
                className="object-cover rounded-lg shadow-md w-full sm:w-3/4 lg:w-full"
              />
            </div>
            {/* Text Container */}
            <div className="w-full lg:w-1/2 xl:w-3/5 pl-0 lg:pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Mennesket i naturen - naturen i mennesket
              </h3>
              <p className="text-gray-600 font-semibold mt-2 mb-6">
                Udstilling: Rene Steen Sørensen 2. - 22. november Fernisering
                lørdag den 2. november kl. 14-18 Gratis entré, øl, vin, vand
                og snacks
              </p>
              <p className="mb-4">
                Det første, du vil bemærke om Rene er, at han udfører sine
                værker med en sjælden håndværksmæssig finesse. Han tegner,
                enten med farveblyant eller filtpen. Tegningerne med
                farveblyant udnytter papirets grove struktur og er meget
                dekorative - dem skal du bare se! Pennetegningerne er mere
                fabulerende og kalder på fortolkning. Dem ser du ikke bare, du
                går tur i dem.
              </p>
              <p className="mb-4">
                Turen fører gennem romantiske naturpanoramaer af en slående
                skønhed. Symbolladede scenarier bygget af elementer som pelset
                dyrehale, sneglehuse, blade, skov, skaktern og ... malstrømme.
                Ofte er malstrømmen hovedmotivet, som de andre elementer
                indgår i, et roterende kaos, altid bundet op i en stram
                komposition, som skaber ro. Til tider en foruroligende ro.
              </p>
              <p className="mb-4">
                Der er et menneske i naturen eller på vej ind i den. Eller
                naturen vokser ud af mennesket, eller mennesket er selv
                sammensat af natur. En reference ligger lige for: Casper David
                Friedrichs maleri af en vandrer, der står på en klippe med
                ryggen til og betragter et oprørt hav.
              </p>
              <p className="mb-4">
                Det er svært at fatte, at alt dette kommer fra en enkelt
                filtpen.
              </p>
              <p className="mb-4">Husk at sætte X i kalenderen.</p>
              <p className="mb-8">/Kell Jarner</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Exhibitions;
  