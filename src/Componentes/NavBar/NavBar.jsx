import { Link } from "react-router-dom";
 
function NavBar() {
    return (
        <header className="flex items-center justify-between bg-black text-white p-8">
        <div className="flex items-center">
            <span className="text-red-700 font-bold text-3xl">NETMARK</span>
            <nav className="ml-9">
                <ul className="flex gap-4 text-colorTxt">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="filmes">Filmes</Link></li>
                    <li><Link to="sobre">Sobre</Link></li>
                    <li><Link to="contato">Contato</Link></li>
                </ul>
            </nav>
        </div>
    </header>
       
     );
}
 
export default NavBar;