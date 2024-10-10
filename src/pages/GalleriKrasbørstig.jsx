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
            <div className="flex items-start">
              {/* Billedcontainer */}
              <div className="w-1/3 flex justify-center">
                <img
                  src="/mennesket-i-naturen-udstilling.jpg"
                  alt="Udstillingsforhåndsvisning"
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Tekstcontainer */}
              <div className="w-2/3 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Mennesket i naturen - naturen i mennesket
                </h3>
                <p className="text-gray-600 mt-2 mb-6">
                  Der findes kunstnere, som skaber v&#230;rker af
                  &#229;ndedr&#230;tsuds&#230;ttende kvalitet, som n&#230;sten
                  ingen ser. M&#229;ske er de for r&#229;, farlige eller
                  n&#248;rdede til de kommercielle kunsthaller, m&#229;ske er
                  kunstnerne bare for d&#229;rlige til at s&#230;lge sig selv.
                  Disse ufundne kunstskatte er jeg skaml&#248;st p&#229; jagt
                  efter, s&#229; jeg kan udstille dem i Smallegades perle,
                  Galleri Krasb&#248;rstig. Det er et held, at Bredgade ikke har
                  &#248;je for dem, for de har ofte mere kraft og kreativitet
                  end de kendte kunstneres v&#230;rker, som er underlagt kravet
                  om salgbarhed. Jeg har fundet &#233;n. Hans navn &#8211; det
                  er en forbrydelse, at det ikke er graveret i messing og
                  h&#230;ngt op p&#229; SMK! &#8211; er Rene Steen
                  S&#248;rensen. Jeg fandt ham p&#229; Instagram og faldt i
                  svime. Siden faldt vi i snak, og forunderligt nok viste det
                  sig, at han boede et stenkast fra Galleri Krasb&#248;rstig.
                  Jeg bes&#248;gte ham og s&#229; v&#230;rkerne &#39;live&#39;,
                  hvilket n&#230;sten tog vejret fra mig. Rene har befundet sig
                  i et produktionsvanvid i mange &#229;r. Han har opn&#229;et en
                  h&#229;ndv&#230;rksm&#230;ssig finesse, som er sj&#230;lden
                  blandt nulevende kunstnere. Han maler ikke, han tegner, enten
                  med pen eller med farveblyanter, og nu kommer det
                  n&#248;rdede: Altid p&#229; den samme slags papir i det samme
                  format og siden sat i samme (ege)tr&#230;sramme (60x80 cm).
                  Pennetegningerne laver han altid med den samme slags pen.
                  &quot;Den dag, den g&#229;r ud af produktion, s&#229; er jeg
                  virkelig p&#229; den&quot;, siger han. Tegningerne med
                  farveblyant udnytter papirets grove struktur og er meget
                  dekorative. Pennetegningerne er mere fabulerende og kalder
                  p&#229; fortolkning. Der er noget fraktalt over dem. Enhederne
                  er prikker, korte streger, l&#230;ngere streger og streger,
                  der er tegnet to gange og derfor m&#248;rkere og tykkere. Ud
                  af disse enheder fabulerer han fantastiske scenarier bygget af
                  grundelementer som pelset dyrehale, sneglehuse, blade, skov,
                  skaktern og ... malstr&#248;mme. Ofte er malstr&#248;mmen
                  hovedmotivet, som de andre elementer indg&#229;r i, et
                  roterende kaos, omend altid bundet op i en stram komposition,
                  som skaber ro. Til tider en foruroligende ro. Billederne
                  fremst&#229;r som det, de kredser om og henter elementer fra:
                  Natur. I flere v&#230;rker er der et menneske, som er i
                  naturen eller p&#229; vej ind i den. I andre vokser naturen ud
                  af mennesket eller mennesket er sammensat af naturelementer.
                  Der er en reference, som ligger lige for: Casper David
                  Friedrichs vandrer, der st&#229;r p&#229; en klippe med ryggen
                  til og betragter et opr&#248;rt hav. I S&#248;rensens billeder
                  er mennesket forbundet med naturen og selv natur. Som
                  betragter bevidner du romantiske panoramaer af en sl&#229;ende
                  sk&#248;nhed. Utopiske og tankev&#230;kkende scenarier, som
                  &#248;jet har sv&#230;rt ved at fatte kommer fra en enkelt
                  filtpen.
                </p>
              </div>
            </div>
            {/* Eksempel på flere udstillinger */}
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
          </section>
        </div>
      </div>
    </>
  );
};

export default GalleriKrasbørstig;
