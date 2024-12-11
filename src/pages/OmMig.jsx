const OmMig = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-10 bg-gray-100 max-w-screen-lg">
        {/* Overskrift */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-left">
          Om mig
        </h1>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Billede 1 */}
          <div className="flex justify-center items-center">
            <img
              src="BW_Kell-Jarner-Kunst.jpg"
              alt="Sort-hvid portræt af Kell Jarner Rasmussen."
              className="responsive-img rounded-lg shadow-lg"
            />
          </div>

          {/* Tekst 1 */}
          <div className="text-gray-800">
            <p className="text-base leading-relaxed">
              Mit navn er Kell Jarner Rasmussen. Jeg har altid malet, i mange år
              om natten, i ferier og i kælderen. Af profession er jeg retoriker,
              men i 2022 gik jeg på deltid i min retorikvirksomhed og etablerede
              Galleri Krasbørstig på Frederiksberg. Her maler jeg i baglokalet og
              holder jævnligt udstillinger, ofte sammen med andre kunstnere.
            </p>
            <p className="mt-4">
              Fra drengeværelset til abstrakt-ekspressionistisk kunst og hjem igen.
            </p>
            <p className="mt-4">
              Da jeg var knægt tegnede jeg altid. Nogle af tegningerne viste jeg til
              mine forældre, men jeg fik aldrig ros. Det skyldtes nok, at min far
              var uforløst kunstmaler - han talte af og til om de tegninger og
              malerier, han havde brændt, da han fik et arbejde. Jeg havde en
              grandonkel, som hed Knud og var blyantens Mozart. Når han tegnede,
              sad hele familien og så på. Han brugte aldrig viskelæder.
            </p>
          </div>

          {/* Tekst 2 */}
          <div className="text-gray-800">
            <p className="text-base leading-relaxed">
              I 2014 var jeg i sommerhuset. Det var juli og smeltende varmt. Jeg
              byggede et staffeli af rafter og spånplader og malede på et 2x2
              meter lærred med abstrakte klippeformationer a la Per Kirkeby. Da
              det begyndte at drille, satte jeg et mindre lærred op og begyndte at
              lege. ‘Ørlingerne’ dukkede op; to fugleunger i et landskab. Den store
              lærer den lille at kaste op. Jeg lo meget af det, mens jeg malede.
            </p>
            <p className="mt-4">
              Lige siden er figurerne myldret frem på lærredet. En tossefisk og en
              fisk med tændstiksben. Fabeldyr som stirrer ind i måsen på en nøgen
              Kristus. Stilen er rå og ‘grim’, figurerne ofte malet med spartel og
              tegnet op med malertuben. Der er noget symbolistisk i det; følelser
              som skam eller begejstring kan tage udtryk af en grumset farvesky bag
              et ansigt eller en hånd.
            </p>
            <p className="mt-4">
              Folk siger ikke, de er flotte. De ER ikke flotte. Men folk kommer ofte
              med udbrud og taler om det, de ser. “Se den gamle nonne. Er det
              netstrømper under kjortlen? Hun har en økse i hånden! Ååh nej, da!”
            </p>
          </div>

          {/* Billede 2 */}
          <div className="flex justify-center items-center">
            <img
               src="Ørlingerne-2014-Kell-Jarner.webp"
              alt="Maleriet Ørlingerne fra 2014 af Kell Jarner Rasmussen. To fugleunger ses i et landskab, hvor den store lærer den lille at kaste op."
              className="responsive-img rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1200px) {
          .container {
            max-width: 1200px;
          }
        }

        @media (max-width: 1199px) {
          .grid {
            grid-template-columns: 1fr !important;
          }

          .container{
          width: 65%;
          }

          .responsive-img {
            width: 90%;
          }
        }

        @media (max-width: 800px) {
          .responsive-img {
            width: 100%;
          }
        }

        @media (max-width: 570px) {
          .responsive-img {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default OmMig;