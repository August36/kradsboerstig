const Exhibitions = () => {
  return (
    <>
                      {/* Slet her fra - */}
                      <div className="flex justify-center bg-black	">
                      <h1 className="text-green-400 text-2xl font-extrabold">
                        Hjemmesiden er i øjeblikket under opdatering, så nogle
                        oplysninger kan mangle. Tak for din tålmodighed!
                      </h1>
                    </div>
                    {/* og hertil */}
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Galleri Krasbørstig</h1>
          <p className="text-lg text-gray-600">
          Info kommer snart
                      </p>
        </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        <img
          src="./krasboerstig-placeholder.jpg"
          alt="Profilbillede"
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
        Info kommer snart
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Udstillinger</h1>
          <p className="text-lg text-gray-600">
          Info kommer snart
          </p>
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
                <h3 className="text-xl font-semibold text-gray-800">Udstillingens Titel</h3>
                <p className="text-gray-600 mt-2">
                Info kommer snart
                </p>
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
                <h3 className="text-xl font-semibold text-gray-800">Udstillingens Titel</h3>
                <p className="text-gray-600 mt-2">
                Info kommer snart
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default Exhibitions;
