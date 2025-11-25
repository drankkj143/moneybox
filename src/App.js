import React, { useState } from "react"
import './app.css'
import Header from "./components/Header/Header";
import { FaPlus } from "react-icons/fa";
import MoneyBoxes from "./components/MoneyBoxes/MoneyBoxes";
import AddMenu from "./components/AddMenu/AddMenu";
import OptionsMenu from "./components/OptionsMenu/OptionsMenu";

const App = () => {
	const [boxes, setBoxes] = useState([
		{id: 1, title: "Отпуск", currValue: 5, color: "hotpink", goal: 120},
		{id: 2, title: "ААА", currValue: 9, color: "yellow", goal: 50},
		{id: 3, title: "Покушать", currValue: 10, color: "blue", goal: 100}
	])
	const [menu, setMenu] = useState(false)
	const [optionsMenu, setOptionsMenu] = useState(false)

	const toggleAddMenu = () => {
		setMenu(!menu)
	}

	const toggleOptionsMenu = () => {
		setOptionsMenu(!optionsMenu)
	}

	const onAdd = (box) => {
		setBoxes([...boxes, { id: boxes.length+1, ...box }])
	}


	return <div className="app">
		<Header toggleOptionsMenu={toggleOptionsMenu}/>
		<MoneyBoxes boxes={boxes}/>
		<FaPlus className="add-button" onClick={toggleAddMenu}/>
		{menu && <AddMenu toggleMenu={toggleAddMenu} onAdd={onAdd}/>}
		{optionsMenu && <OptionsMenu toggleOptionsMenu={toggleOptionsMenu}/>}
	</div>
}

export default App