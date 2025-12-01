import React from "react"
import './othermenu.css'
import { useTranslation } from "react-i18next"

const OtherMenu = ({onDelete, toggleEditMenu, id, changeBoxTitle, boxTitle}) => {
	const { t } = useTranslation('edit')
	
	return <div className="other-menu">
		<button onClick={() => {
				const input = prompt(t("promt.newTitle"), boxTitle)
				changeBoxTitle(id, input)
				toggleEditMenu()
			}}>{t('edit')}</button>
		<button onClick={() => {
			toggleEditMenu()
			onDelete(id)
		}}>{t('remove')}</button>
	</div>
}

export default OtherMenu