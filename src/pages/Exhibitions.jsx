const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Galleri Krasbørstig</h1>
          <p className="text-lg text-gray-600">
            Kom og tjek vores seje galleri
                      </p>
        </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        <img
          src="./krasboerstig-placeholder.jpg"
          alt="Profilbillede"
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
        Velkommen til Krasbørstig Galleri, et dynamisk kunstnerisk rum dedikeret til at udforske og fejre kreativitetens mangfoldighed. Vores galleri tilbyder en unik platform for både etablerede kunstnere og nye talenter, der ønsker at præsentere deres værker for et engageret publikum. Med en bred vifte af udstillinger, fra moderne malerier til skulpturer og multimediekunst, stræber Krasbørstig Galleri efter at inspirere og fascinere alle kunstelskere. Kom og oplev den nyskabende kunst, der definerer vores tid, i en atmosfære af innovation og æstetik.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Udstillinger</h1>
          <p className="text-lg text-gray-600">
            Opdag vores kommende og tidligere udstillinger. Dyk ned i kunstens verden og udforsk vores galleriarrangementer.
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
                  Detaljer om udstillingen. Inkluder datoer, sted og en kort beskrivelse.
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
                  Detaljer om udstillingen. Inkluder datoer, sted og en kort beskrivelse.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Exhibitions;
