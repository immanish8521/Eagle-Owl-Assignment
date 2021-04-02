import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const InfoCircel = ({ recipie }) => {
	const {name, margin} = recipie
    return (
      	<div className="mx-auto mt-2 h-14 w-14">
            
			<p>{ name}</p>
		<div className="mt-2"></div>
			<CircularProgressbar
				value={margin}
				text={`${margin}%`}
			/>
		</div>
    )
}

export default InfoCircel;
