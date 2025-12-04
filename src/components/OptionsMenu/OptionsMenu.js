import React, { useState } from "react"
import './optionsmenu.css'
import { FaWallet, FaGear } from "react-icons/fa6"
import { FaHome, FaShare } from "react-icons/fa"
import AppInfoMenu from "../AppInfoMenu/AppInfoMenu"
import { useTranslation } from "react-i18next"

const OptionsMenu = ({toggleOptionsMenu, changeTheme}) => {
	const { t } = useTranslation('side')

	const shareData = {
		title: "MoneyBox",
		text: "Создавай свои универсальные копилки в данном приложении",
		url: window.location.href
	}

	const [isInfoMenu, setInfoMenu] = useState(false)

	const onShare = async () => {
		try{
			await navigator.share(shareData)
		}
		catch (err){
			console.log(err)
		}
	}

	const toggleInfoMenu = () => {
		setInfoMenu(!isInfoMenu)
	}
	
	return <div className="options-menu">
		<FaWallet className="options-icon"/>
		<p className="options-title">Moneybox</p>
		<button className="options-button" onClick={toggleOptionsMenu}>
			<FaHome className="options-button-icon"/>
			{t("buttonHome")}
		</button>
		<button className="options-button" onClick={toggleInfoMenu}>
			<FaGear className="options-button-icon"/>
			{t("buttonSettings")}
		</button>
		<button className="options-button">
			<FaShare className="options-button-icon" onClick={onShare}/>
			{t("buttonShare")}
		</button>
		{isInfoMenu && <AppInfoMenu toggleInfoMenu={toggleInfoMenu} changeTheme={changeTheme}/>}
	</div>
}

export default OptionsMenu