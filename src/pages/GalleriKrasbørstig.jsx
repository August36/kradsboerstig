import Exhibitions from "../components/Exhibitions";

const GalleriKrasbørstig = () => {
  return (
    <>
      {/* Hovedindhold */}
      <div className="min-h-screen py-8 px-4 md:px-6 sm:px-2 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <header className="text-left mb-6">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
              Galleri Krasbørstig
            </h1>
            <p className="text-lg text-gray-600">
              I Smallegade finder du Galleri Krasbørstig, hvor jeg udstiller
              billedkunst med kant og fortællinger.
            </p>
          </header>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="./Krasboerstig-gade.jpeg"
                alt="Billede af Galleri Krasbørstigs facade"
                className="w-full h-auto object-cover rounded-lg shadow-lg mb-5"
              />
              <p className="mb-5">Smallegade 52B, st.tv., 2000 Frederiksberg</p>
              <p className="text-base leading-relaxed">
                Du er altid velkommen til at kigge ind i <br /> Galleri
                Krasbørstig Åbningstiderne er:
              </p>
              <ol className="list-disc list-inside text-base leading-relaxed mt-5">
                <li>Torsdag kl. 12-18</li>
                <li>Fredag kl. 17-19</li>
                <li>Lørdag kl. 12-16</li>
              </ol>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Der findes kunstnere, som har øvet sig hele livet og skaber
                værker af høj kvalitet. Og alligevel er de aldrig slået
                igennem. Det skyldes som regel, at de ikke arbejder på
                markedsvilkår; de har ikke et brand eller en mission, de tænker
                ikke i målgrupper osv. Det, de har, er en drift, som prikker og
                kradser, og derfor bliver de ved.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dét er ideen bag Galleri Krasbørstig. At finde og formidle de
                skjulte skatte af nutidskunst, som produceres af supertalenter,
                der maler lidt for skævt, råt, nørdet, barnligt, frækt eller
                filosofisk til de fleste dagligstuer.
              </p>
            </div>
          </div>
        </div>

        <Exhibitions />
      </div>
    </>
  );
};

export default GalleriKrasbørstig;
