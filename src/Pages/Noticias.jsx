import data from "../../article.json";

function Noticias() {
  return (
    <>
      <div className=" bg-black">

        <h1 className="text-white text-4xl pl-12 pb-6">Notícias</h1>
        {data.map((filme) => (
          <div className="flex card mx-5 gap-3 border-t-2" key={filme.title}>

            {filme.image ? (
              <img
                className="w-56 flex justify-center items-center m-10 mb-15 mt-10"
                src={filme.image}
                alt={filme.title}
              />
            ) : (
              "Não tem imagem"
            )}

            <div className="text-2xl rounded-lg text-white p-10 mb-7 text-justify">
              {filme.text.map((text) => (
                <span key={text}> {text}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Noticias;
