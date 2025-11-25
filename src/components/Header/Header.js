import React from "react"
import './header.css'
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = ({toggleOptionsMenu}) => {
	return <header>
		<IoReorderThreeOutline className="sidebar-icon" onClick={toggleOptionsMenu}/>
		<input type="text" className="search-bar" placeholder="Поиск"/>
	</header>
}

export default Header