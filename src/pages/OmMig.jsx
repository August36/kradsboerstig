const OmMig = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-2 md:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <header className="text-left mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Om mig</h1>
        </header>

        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Venstre kolonne */}
          <div className="w-full md:w-1/2">
            <figure className="mb-5">
              <img
                src="BW_Kell-Jarner-Kunst.jpg"
                alt="Sort-hvid portræt af Kell Jarner Rasmussen."
                className="w-240 h-auto object-cover rounded-lg shadow-lg mx-auto"
              />
              <figcaption className="text-sm text-gray-600 text-center mt-2">
                Kell Jarner Rasmussen (Født 1966)
              </figcaption>
            </figure>

            <ul className="text-gray-800 text-base leading-relaxed list-disc list-inside mb-6 sm:pl-20 md:pl-0">
              <li className="font-bold list-none">Repræsenteret på:</li>
              <ul className="pl-6 list-none mb-6">
                <li>Galleri Lorien (Frederiksberg og Tejn)</li>
                <li>OMG (Odense)</li>
                <li>Galleri Krasbørstig (eget galleri på Frederiksberg)</li>
              </ul>

              <li className="font-bold list-none">Udstillinger:</li>
              <ul className="pl-6 list-none">
                <li>SAS 1982</li>
                <li>Holbæk Centralsygehus 2004</li>
                <li>3F København 2011</li>
                <li>Galleri Lorien soloudstilling 2016</li>
                <li>Galleri Lorien, diverse gruppeudstillinger 2015-24</li>
                <li>Helleruplund 2021</li>
                <li>Die Kunsthalle Liselje 2021</li>
                <li>OMG soloudstilling 2024</li>
                <li>OMG diverse gruppeudstillinger 2023-2024</li>
              </ul>

              <li className="mt-6 list-none">
                Nåede til semifinalen i Danmarks bedste portrætmaler på DR1 i
                2019
              </li>
            </ul>

            <figure className="mb-5">
              <img
                src="Ørlingerne-2014-Kell-Jarner.webp"
                alt="Maleriet Ørlingerne fra 2014 af Kell Jarner Rasmussen."
                className="w-60 h-auto object-cover rounded-lg shadow-lg mx-auto"
              />
              <figcaption className="text-sm text-gray-600 text-center mt-2">
                &quot;Ørlingerne &quot; 2014
              </figcaption>
            </figure>
          </div>

          {/* Højre kolonne */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4">
              Fra drengeværelset til abstrakt-ekspressionistisk kunst
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Jeg har altid malet, i mange år om natten, i ferier og i kælderen.
              Af profession er jeg retoriker, men i 2022 gik jeg på deltid i min
              retorikvirksomhed og etablerede Galleri Krasbørstig på
              Frederiksberg. Her maler jeg i baglokalet og holder jævnligt
              udstillinger, ofte sammen med andre kunstnere.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Da jeg var knægt tegnede jeg altid. Nogle af tegningerne viste jeg
              til mine forældre, men jeg fik aldrig ros. Det skyldtes nok, at
              min far var uforløst kunstmaler - han talte af og til om de
              tegninger og malerier, han havde brændt, da han fik et arbejde.
              Jeg havde en grandonkel, som hed Knud og var blyantens Mozart. Når
              han tegnede, sad hele familien og så på. Han brugte aldrig
              viskelæder.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I 2014 var jeg i sommerhuset. Det var juli og smeltende varmt. Jeg
              byggede et staffeli af rafter og spånplader og malede på et 2x2
              meter lærred med abstrakte klippeformationer a la Per Kirkeby. Da
              det begyndte at drille, satte jeg et mindre lærred op og begyndte
              at lege. ‘Ørlingerne’ dukkede op; to fugleunger i et landskab. Den
              store lærer den lille at kaste op. Jeg lo meget af det, mens jeg
              malede.
            </p>

            <h2 className="text-xl font-bold mb-4">
              Symbolisme og inspiration
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Lige siden er figurerne myldret frem på lærredet. En tossefisk og
              en fisk med tændstiksben. Fabeldyr som stirrer ind i måsen på en
              nøgen Kristus. Stilen er rå og ‘grim’, figurerne ofte malet med
              spartel og tegnet op med malertuben. Der er noget symbolistisk i
              det; følelser som skam eller begejstring kan tage udtryk af en
              grumset farvesky bag et ansigt eller en hånd.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Folk siger ikke, de er flotte. De ER ikke flotte. Men folk kommer
              ofte med udbrud og taler om det, de ser. “Se den gamle nonne. Er
              det netstrømper under kjortlen? Hun har en økse i hånden! Ååh nej,
              da!”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmMig;
