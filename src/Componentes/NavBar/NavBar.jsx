import { Link } from "react-router-dom";
 
function NavBar() {
    return (
        <header className="flex items-center justify-between bg-black text-white p-8">
        <div className="flex items-center">
            <span className="text-red-700 font-bold text-3xl">NETMARK</span>
            <nav className="ml-9">
                <ul className="flex gap-4 text-colorTxt">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li className="hover:underline"><Link to="noticias">Notícias</Link></li>
                </ul>
            </nav>
        </div>
    </header>
       
     );
}
 
export default NavBar;