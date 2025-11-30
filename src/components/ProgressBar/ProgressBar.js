import React, { useEffect, useState } from "react"
import './progressbar.css'

const ProgressBar = ({box}) => {
	const percentage = box.currValue/box.goal*100

	const [width, setWidth] = useState(0)

	useEffect(() => {
		setWidth(percentage)
	}, [percentage])

	return <div className="progress-bar">
		<div className="progress" style={{
			background: box.color,
			width: width+"%"
		}}></div>
		<p>
			{(percentage).toFixed(2)}% (Осталось: {(box.goal-box.currValue).toFixed(2)})
		</p>
	</div>
}

export default ProgressBar