import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-success">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/users">Users</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}