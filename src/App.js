import React, { useEffect, useState } from "react"
import './App.css'
import "./i18n"

import Header from "./components/Header/Header";
import { FaPlus } from "react-icons/fa";
import MoneyBoxes from "./components/MoneyBoxes/MoneyBoxes";
import AddMenu from "./components/AddMenu/AddMenu";
import OptionsMenu from "./components/OptionsMenu/OptionsMenu";
import EditMenu from "./components/EditMenu/EditMenu"
import { useTranslation } from "react-i18next"

const App = () => {
	const [boxes, setBoxes] = useState(() => {
		const saved = localStorage.getItem("allBoxes")
		return saved ? JSON.parse(saved) : [
			{id: 1, title: "Отпуск", currValue: 5, color: "hotpink", goal: 120},
			{id: 2, title: "ААА", currValue: 9, color: "yellow", goal: 50},
			{id: 3, title: "Покушать", currValue: 10, color: "blue", goal: 100}
		]
	}	
	)
	const [menu, setMenu] = useState(false)
	const [optionsMenu, setOptionsMenu] = useState(false)
	const [isEditMenu, setEditMenu] = useState(false)

	const [currDiv, setCurrDiv] = useState(null)
	const [currBox, setCurrBox] = useState(null)

	const [theme, setTheme] = useState("dark")

	const { i18n } = useTranslation('main')

	useEffect(() => {
		localStorage.setItem("allBoxes", JSON.stringify(boxes))
	}, [boxes])

	useEffect(() => {
		const savedLang = localStorage.getItem("lang")
		const savedTheme = localStorage.getItem("theme")
		if (savedLang) {
			i18n.changeLanguage(savedLang)
		}
		if(savedTheme)
			setTheme(savedTheme)
	}, [])

	const toggleAddMenu = () => {
		setMenu(!menu)
	}

	const deleteBox = (boxId) => {
		setBoxes(boxes.filter((box) => box.id !== boxId))
	}

	const toggleEditMenu = (divInfo, boxInfo) => {
		setCurrDiv(divInfo)
		setCurrBox(boxInfo)
		setEditMenu(!isEditMenu)
	}

	const toggleOptionsMenu = () => {
		setOptionsMenu(!optionsMenu)
	}

	const onAdd = (box) => {
		setBoxes([...boxes, { id: boxes.length+1, ...box }])
	}

	const changeBalance = (operation, boxId, newValue) => {
		setBoxes(prevBoxes =>
			prevBoxes.map((box) =>
				box.id === boxId ? {...box, currValue: operation === '+' 
					?  box.currValue + newValue
					:  box.currValue - newValue
				} : box
			)
		)
	}

	const changeBoxTitle = (boxId, newTitle) => {
		setBoxes(prevBoxes =>
			prevBoxes.map((box) =>
					box.id === boxId ? {...box, title: newTitle} : box
			)
		)
	}

	const changeTheme = () => {
		setTheme(localStorage.getItem("theme"))
	}

	return <div className={`app ${theme}`}>
		<Header toggleOptionsMenu={toggleOptionsMenu}/>
		<MoneyBoxes boxes={boxes} toggleEditMenu={toggleEditMenu}/>
		<FaPlus className="add-button" onClick={toggleAddMenu}/>
		{menu && <AddMenu toggleMenu={toggleAddMenu} onAdd={onAdd}/>}
		{optionsMenu && <OptionsMenu toggleOptionsMenu={toggleOptionsMenu} changeTheme={changeTheme}/>}
		{isEditMenu && <EditMenu div={currDiv} box={currBox}
		toggleEditMenu={toggleEditMenu} changeBalance={changeBalance}
		onDelete={deleteBox} changeBoxTitle={changeBoxTitle}/>}
	</div>
}

export default App