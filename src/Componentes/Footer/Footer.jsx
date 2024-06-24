function Footer() {
    return (
       <footer className="bg-zinc-800 text-white w-full " >
        <div className="flex justify-between p-10">
            <div>
                <h1 className="font-bold text-2xl">LOCALIZAÇÃO</h1>
                <p>SHOPPING JARDIM BELO</p>
            </div>
            <div>
                <input type="text" placeholder="Digite sua mensagem" />
                <button>ENVIAR</button>
            </div>
            <div>
                <h1 className="font-bold text-2xl">REDES SOCIAIS</h1>
                <p>INSTAGRAM: @NETMARK</p>
                <p>X: @NETMARK</p>
            </div>
            <div>
                <h1 className="font-bold text-2xl">ENTRE EM CONTATO</h1>
                <p>EMAIL: netmark@mark.com</p>
                <p>TELEFONE: 11 95841 66612</p>
                <p>AGENCIA: netmark.ltda</p>

            </div>
        </div>
       </footer>
     );
}
 
export default Footer;