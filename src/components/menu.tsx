export default function MenuBar(){
    return(
        <nav className="flex justify-center items-center h-16 bg-jacksons-purple-100">
            <ul className="flex space-x-10 text-jacksons-purple-800">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Tech Stack</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}