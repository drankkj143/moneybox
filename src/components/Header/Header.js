import React from "react"
import './header.css'
import { IoReorderThreeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next"

const Header = ({toggleOptionsMenu}) => {
	const { t } = useTranslation("main")

	return <header>
		<IoReorderThreeOutline className="sidebar-icon" onClick={toggleOptionsMenu}/>
		<input type="text" className="search-bar" placeholder={t("search")}/>
	</header>
}

export default Header