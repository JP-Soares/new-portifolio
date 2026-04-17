export default function MenuBar(){
    return(
        <nav className="flex justify-center items-center h-16 w-full bg-woodsmoke-50 fixed z-10">
            <ul className="flex space-x-10 text-jacksons-woodsmoke-800">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Tech Stack</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}