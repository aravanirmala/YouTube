import { Link } from "react-router-dom"

const Navbar = () => {
  return <div className="navbar">

    <div className="nav1">
      <i class="bi bi-justify"></i>
      <h1> <i class="bi bi-youtube"></i>YouTube</h1>
    </div>
    <div className='search-container'>
      <input type="text" placeholder='Search'></input>
      <button className="btn"><i class="bi bi-search"></i></button>
    </div>
    <div className="div2">
      <i class="bi bi-mic"></i>
    </div>
    <div className="div3">
      <i class="bi bi-bell-fill"></i>
      <i class="bi bi-person-circle"></i>
    </div>
  </div>
}
export default Navbar