const GalleriKrasbørstig = () => {
  return (
    <>
      {/* Hovedindhold */}
      <div className="min-h-screen py-8 px-4 md:px-6 sm:px-2 lg:px-8 custom:flex custom:flex-col custom:justify-center custom:items-center">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Galleri Krasbørstig
          </h1>
          <p className="text-lg text-gray-600">
            I Smallegade finder du Galleri Krasbørstig, hvor jeg udstiller
            billedkunst med kant og fortællinger.
          </p>
        </header>

        <div className="flex flex-col flex-1 md:flex-row items-start justify-center gap-8 mb-12 custom:flex custom:flex-col custom:justify-center custom:items-center">
          <div>
            <img
              src="./Krasboerstig-gade.jpeg"
              alt="Billede af Galleri Krasbørstigs facade"
              className="w-100 h-80 object-cover rounded-lg shadow-lg mb-5 custom:flex custom:flex-col custom:justify-center custom:items-center"
            />
            <p className="mb-5">Smallegade 52B, st.tv., 2000 Frederiksberg</p>
            <p className="text-base leading-relaxed">
              Du er altid velkommen til at kigge ind i <br /> Galleri
              Krasbørstig Åbningstiderne er:
            </p>
            <ol className="list-disc list-inside text-base leading-relaxed custom:mt-5">
              <li>Torsdag kl. 12-18</li>
              <li>Fredag kl. 17-19</li>
              <li>Lørdag kl. 12-16</li>
            </ol>
          </div>

          <div className="w-full md:w-1/2 max-w-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Der findes kunstnere, som har øvet sig hele livet og skaber værker
              af høj kvalitet. Og alligevel er de aldrig slået igennem. Det
              skyldes som regel, at de ikke arbejder på markedsvilkår; de har
              ikke et brand eller en mission, de tænker ikke i målgrupper osv.
              Det, de har, er en drift, som prikker og kradser, og derfor bliver
              de ved.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Dét er ideen bag Galleri Krasbørstig. At finde og formidle de
              skjulte skatte af nutidskunst, som produceres af supertalenter,
              der maler lidt for skævt, råt, nørdet, barnligt, frækt eller
              filosofisk til de fleste dagligstuer.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto md:px-4 lg:px-4 xl:px-4 px-0">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Udstillinger
            </h1>
          </header>

          <section className="bg-white shadow-md rounded-lg p-2 sm:p-8 md:p-8 w-full">
            <h2 className="text-2xl font-bold mb-8 md:mb-12">
              Kommende Udstillinger
            </h2>
            <div className="flex flex-col lg:flex-row items-start justify-center md:items-center lg:items-start xl:items-start gap-8 mb-12">
              {/* Billedcontainer */}
              <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 flex justify-center items-start pb-8 lg:pb-0 lg:pr-8">
                <img
                  src="/mennesket-i-naturen-udstilling.jpg"
                  alt="Udstillingsforhåndsvisning"
                  className="object-cover rounded-lg shadow-md w-full sm:w-3/4 lg:w-full"
                />
              </div>
              {/* Tekstcontainer */}
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
      </div>
    </>
  );
};

export default GalleriKrasbørstig;
