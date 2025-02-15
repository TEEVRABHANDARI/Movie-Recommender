import React ,{useState}from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu] = useState("")
  return (
    <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><Link to="/" style={{textDecoration:"none"}}>RateMyshow</Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page"><Link to="/home" style={{textDecoration:"none"}}>Home</Link></a>
                </li>
                
            {/* Login Page */}
                <li className="nav-item">
                <a className="nav-link"><Link to="/login" style={{textDecoration:"none"}}>Login</Link></a>
                </li>
            {/* My profile add a logo */}
                <li className="nav-item">
                <a className="nav-link" href='/profile'>Profile</a>
                </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar