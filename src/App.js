function App() {
  return (
    <main className="bg-neutral-200 w-full h-screen ">
      <section className="flex flex-col md:flex-row w-4/5 mx-auto gap-10 pt-10">
        <div className="bg-yellow-300 mx-auto p-9 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center font-serif text-blue-900">
            ¿QUERÉS HACERTE SOCIO?
          </h1>
          <p className="my-3 text-balance text-center">
            Completá los pasos y asociate. ¡Es rápido y fácil!
          </p>
          <button className="bg-blue-500 text-white font-bold p-3 rounded-full text-center">
            ASOCIATE
          </button>
        </div>

        <div className="flex flex-col  bg-gray-500 w-full mx-auto p-5 rounded-lg justify-center p-9">
          <div className="flex justify-between items-center md:flex-row xs:flex-col">
            <div className="flex flex-col">
              <h1 className="text-3xl text-center font-ser text-white">
                ¿TODAVIA NO TE REGISTRASTE?
              </h1>
              <p className="my-3 text-white text-left">
                Si ya sos socio, ¡activá tu cuenta ahora!
              </p>
            </div>
            <button className="bg-blue-500 text-white font-bold p-3 rounded-full text-center">
              REGISTRATE
            </button>
          </div>

          <hr className="my-3 h-px border-t bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

          <div className="flex justify-between items-center md:flex-row xs:flex-col">
            <div className="flex flex-col">
              <h1 className="text-3xl text-center font-ser text-white">
                ¿YA ESTÁS REGISTRADO?
              </h1>
              <p className="my-3 text-white text-left">
                Si ya tenés tu cuenta, ingresá desde acá
              </p>
            </div>
            <button className="bg-blue-500 text-white font-bold p-3 rounded-full text-center">
              INICIA SESIÓN
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;