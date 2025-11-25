import React from "react"
import './optionsmenu.css'
import { FaWallet, FaGear } from "react-icons/fa6"
import { FaHome, FaShare } from "react-icons/fa"

const OptionsMenu = ({toggleOptionsMenu}) => {
	const shareData = {
		title: "MoneyBox",
		text: "Создавай свои универсальные копилки в данном приложении",
		url: window.location.href
	}

	const onShare = async () => {
		try{
			await navigator.share(shareData)
		}
		catch (err){
			console.log(err)
		}
	}
	
	return <div className="options-menu">
		<FaWallet className="options-icon"/>
		<p className="options-title">Moneybox</p>
		<button className="options-button" onClick={toggleOptionsMenu}>
			<FaHome className="options-button-icon"/>
			Домой
		</button>
		<button className="options-button">
			<FaGear className="options-button-icon"/>
			Настройки
		</button>
		<button className="options-button">
			<FaShare className="options-button-icon" onClick={onShare}/>
			Поделиться
		</button>
	</div>
}

export default OptionsMenu