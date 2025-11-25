import React from "react"
import './progressbar.css'

const ProgressBar = ({box}) => {
	const percentage = box.currValue/box.goal*100

	return <div className="progress-bar">
		<div className="progress" style={{
			background: box.color,
			width: percentage+"%"
		}}></div>
		<p>
			{(percentage).toFixed(2)}% (Осталось: {(box.goal-box.currValue).toFixed(2)})
		</p>
	</div>
}

export default ProgressBar