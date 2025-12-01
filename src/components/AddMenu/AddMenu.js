import React, { useRef, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { useTranslation } from "react-i18next"
import './addmenu.css'

const AddMenu = ({ toggleMenu, onAdd }) => {
    const { t } = useTranslation('add')
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
            <p className="title">{t("title")}</p>
            <form onSubmit={createNewBox}>
                <label htmlFor="box-title">{t("inputTitle.mainTitle")}</label>
                <input
                    id="box-title"
                    type="text"
                    value={box.title}
                    onChange={handleChange}
                />

                <label htmlFor="box-goal">{t("inputTitle.goalTitle")}</label>
                <input
                    id="box-goal"
                    type="number"
                    value={box.goal}
                    onChange={handleChange}
                />

                <label htmlFor="box-currValue">{t("inputTitle.openingBalance")}</label>
                <input
                    id="box-currValue"
                    type="number"
                    value={box.currValue}
                    onChange={handleChange}
                />

                <div className="custom-menu">
                    <div className="select-color">
                        <label htmlFor="box-color">{t("inputTitle.colorTitle")}</label>
                        <input
                            id="box-color"
                            type="color"
                            value={box.color}
                            onChange={handleColorChange}
                        />
                    </div>
                </div>
                <button type="submit" className="save">{t("buttonTitle")}</button>
            </form>
        </div>
    )
}

export default AddMenu;
