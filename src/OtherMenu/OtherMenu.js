import React from "react"
import './othermenu.css'

const OtherMenu = ({onDelete, toggleEditMenu, id, changeBoxTitle, boxTitle}) => {
	return <div className="other-menu">
		<button onClick={() => {
				const input = prompt("Введите новое название для копилки: ", boxTitle)
				changeBoxTitle(id, input)
				toggleEditMenu()
			}}>Редактировать</button>
		<button onClick={() => {
			toggleEditMenu()
			onDelete(id)
		}}>Удалить</button>
	</div>
}

export default OtherMenu