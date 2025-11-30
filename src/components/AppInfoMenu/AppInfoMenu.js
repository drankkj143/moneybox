import React from "react"
import './appinfomenu.css'
import { CgColorBucket } from "react-icons/cg"
import { IoIosArrowBack } from "react-icons/io"
import { MdLanguage, MdEmail } from "react-icons/md"
import { FaGithub, FaTelegram } from "react-icons/fa"

const AppInfoMenu = ({toggleInfoMenu}) => {
	return <div className="app-info-menu">
		<div className="info-menu-back">
			<IoIosArrowBack className="back-button" onClick={toggleInfoMenu}/>
			<p>Настройки</p>
		</div>
		
		<div className="info-block">
			<p>Приложение</p>
			<div className="info-block-content">
				<CgColorBucket className="info-block-icon"/>
				<div className="info-block-input">
					<label htmlFor="info-block-select">Тема</label>
					<select id="info-block-select">
						<option>Темная</option>
						<option>Светлая</option>
					</select>
				</div>
			</div>
			<div className="info-block-content">
				<MdLanguage className="info-block-icon"/>
				<div className="info-block-input">
					<label htmlFor="info-block-select">Язык</label>
					<select id="info-block-select">
						<option>Русский</option>
						<option>English</option>
					</select>
				</div>
			</div>
		</div>
		<div className="info-block">
			<p>Разработчик</p>
			<div className="info-block-content">
				<FaGithub className="info-block-icon"/>
				<a href="https://github.com/drankkj143">Github</a>
			</div>
			<div className="info-block-content">
				<FaTelegram className="info-block-icon"/>
				<a href="https://t.me/angeImaycry1">Telegram</a>
			</div>
			<div className="info-block-content">
				<MdEmail className="info-block-icon"/>
				<a href="mailto:danilarakovets@gmail.com">Email</a>
			</div>
		</div>
	</div>
}

export default AppInfoMenu