import React, { useState } from "react"
import './editmenu.css'
import ProgressBar from "../ProgressBar/ProgressBar"
import { IoIosArrowBack } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs";
import OtherMenu from "../../OtherMenu/OtherMenu";

const EditMenu = ({div, box, toggleEditMenu, onDelete, changeBalance, changeBoxTitle}) => {
	const [posX, posY] = [div.offsetLeft + div.offsetWidth / 2,
						 div.offsetTop + div.offsetHeight / 2]

	const [isOther, setOther] = useState(false)

	const toggleOtherMenu = () => {
		setOther(!isOther)
	}

	return <div className="edit-menu" style={{top: posY, 
		left: posX, width: "1px", height: "1px"}}>
			<div className="edit-menu-title">
				<IoIosArrowBack className="back-button" onClick={toggleEditMenu} />
				<p>{box.title}</p>
				<div>
					<BsThreeDotsVertical className="back-button" 
					onClick={toggleOtherMenu}/>
					{isOther && <OtherMenu onDelete={onDelete}
					 toggleEditMenu={toggleEditMenu} changeBoxTitle={changeBoxTitle}
					 id={box.id} boxTitle={box.title}/>}
				</div>
			</div>
			<div className="edit-menu-box-info">
				<p className="edit-menu-box-info-title">Текущий баланс</p>
				<p className="edit-menu-box-info-value">{box.currValue}</p>
				<div className="edit-menu-box-info-buttons">
					<button onClick={() => {
						const input = prompt("Введите значение: ")
						if(isNaN(input)){
							alert("Введите правильное число!")
							return
						}
						changeBalance('+', box.id, Number(input))
						toggleEditMenu()
						}}>Пополнить</button>
					<button onClick={() => {
						const input = prompt("Введите значение: ")
						if(isNaN(input)){
							alert("Введите правильное число!")
							return
						}
						changeBalance('-', box.id, Number(input))
						toggleEditMenu()
						}}>Вывести</button>
				</div>
			</div>
			<div className="edit-menu-progress">
				<div className="edit-menu-progress-title">
					<b>Прогресс</b>
					<p>Цель: {box.goal}</p>
				</div>
				<ProgressBar box={box}/>
			</div>
	</div>
}

export default EditMenu