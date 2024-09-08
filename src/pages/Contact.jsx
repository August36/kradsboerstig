const Contact = () => {
  return (
    <>
    <div className="flex justify-center bg-black	">
          <h1 className="text-green-400 text-2xl font-extrabold">
          Hjemmesiden er i øjeblikket under opdatering, så nogle oplysninger kan mangle. Tak for din tålmodighed!
          </h1>
          </div>
    {/* <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Kontakt os</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src="/toon/Udåden-Kell-Jarner-2016.webp" 
            alt="Placeholder" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Vi vil gerne høre fra dig!</h2>
          <p className="mb-4">
            Hvis du har spørgsmål, kommentarer eller feedback, er du velkommen til at kontakte os.
            Udfyld formularen nedenfor, og vi vender tilbage til dig så hurtigt som muligt.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Navn</label>
              <input
                type="text"
                id="name"
                placeholder="Dit navn"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Din email"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Besked</label>
              <textarea
                id="message"
                placeholder="Din besked"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Send besked
            </button>
          </form>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Contact;
