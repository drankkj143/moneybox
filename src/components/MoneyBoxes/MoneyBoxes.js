import React from "react"
import './moneyboxes.css'
import MoneyBox from "../MoneyBox/MoneyBox"

const MoneyBoxes = ({boxes}) => {
	return <div className="money-boxes">
		{boxes.map((el) => {
			return <MoneyBox box={el} key={el.id}/>
		})}
	</div>
}

export default MoneyBoxes