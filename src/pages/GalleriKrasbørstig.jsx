const GalleriKrasbørstig = () => {
  return (
    <>
      {/* Hovedindhold */}
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 custom:flex custom:flex-col custom:justify-center custom:items-center">
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

        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Udstillinger
            </h1>
            <p className="text-lg text-gray-600">Info kommer snart</p>
          </header>

          {/* Placeholder for Exhibitions */}
          <section className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Kommende Udstillinger</h2>
            <div className="space-y-4">
              {/* Placeholder for individual exhibition */}
              <div className="border-t border-gray-200 pt-4 flex items-start space-x-4">
                <img
                  src="/morbid/Bjørnehue.jpeg"
                  alt="Udstillingsforhåndsvisning"
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Udstillingens Titel
                  </h3>
                  <p className="text-gray-600 mt-2">Info kommer snart</p>
                </div>
              </div>
              {/* Repeat the above block for more exhibitions */}
              <div className="border-t border-gray-200 pt-4 flex items-start space-x-4">
                <img
                  src="toon/Natdyr.jpg"
                  alt="Udstillingsforhåndsvisning"
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Udstillingens Titel
                  </h3>
                  <p className="text-gray-600 mt-2">Info kommer snart</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GalleriKrasbørstig;
