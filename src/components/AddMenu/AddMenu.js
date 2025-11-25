import React, { useRef, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import './addmenu.css';

const AddMenu = ({ toggleMenu, onAdd }) => {
    const [box, setBox] = useState({
        title: "",
        currValue: 0,
        color: "#000000",
        goal: 0
    })

    const menuRef = useRef(null)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBox(prevBox => ({
            ...prevBox,
            [id.replace('box-', '')]: value
        }))
    }

    const handleColorChange = (e) => {
        setBox(prevBox => ({
            ...prevBox,
            color: e.target.value
        }))
    }

    const createNewBox = (e) => {
        e.preventDefault();
        onAdd(box);
        toggleMenu()
    }


    return (
        <div className="add-menu" ref={menuRef}>
            <IoIosArrowBack className="back-button" onClick={toggleMenu} />
            <p className="title">Создать копилку</p>
            <form onSubmit={createNewBox}>
                <label htmlFor="box-title">Название</label>
                <input
                    id="box-title"
                    type="text"
                    value={box.title}
                    onChange={handleChange}
                />

                <label htmlFor="box-goal">Цель</label>
                <input
                    id="box-goal"
                    type="number"
                    value={box.goal}
                    onChange={handleChange}
                />

                <label htmlFor="box-currValue">Начальный баланс</label>
                <input
                    id="box-currValue"
                    type="number"
                    value={box.currValue}
                    onChange={handleChange}
                />

                <div className="custom-menu">
                    <div className="select-color">
                        <label htmlFor="box-color">Цвет</label>
                        <input
                            id="box-color"
                            type="color"
                            value={box.color}
                            onChange={handleColorChange}
                        />
                    </div>
                </div>
                <button type="submit" className="save">Сохранить</button>
            </form>
        </div>
    )
}

export default AddMenu;
