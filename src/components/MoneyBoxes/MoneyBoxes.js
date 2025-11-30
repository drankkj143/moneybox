import React, { useState } from "react"
import './moneyboxes.css'
import MoneyBox from "../MoneyBox/MoneyBox"

const MoneyBoxes = ({boxes, toggleEditMenu}) => {
	return <div className="money-boxes">
		{boxes.map((el) => {
			return <MoneyBox onEdit={toggleEditMenu} box={el} key={el.id}/>
		})}
	</div>
}

export default MoneyBoxes