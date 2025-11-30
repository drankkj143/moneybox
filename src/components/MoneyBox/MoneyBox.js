import React from "react"
import './moneybox.css'
import ProgressBar from "../ProgressBar/ProgressBar"

const MoneyBox = ({box, onEdit}) => {
	return <div className="box" onClick={(ev) => {onEdit(ev.target, box)}}>
		<div className="box-content">
			<div>
				<p className="moneybox-title">{box.title}</p>
				<p className="moneybox-value">{box.currValue}</p>
			</div>
		</div>
		<ProgressBar box={box}/>
	</div>
}

export default MoneyBox