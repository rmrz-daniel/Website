import React from 'react'

function Skill({logo, text}) {
	return (
		<div class="w-[20vh] flex flex-col items-center gap-10">
			<img src={`${logo}.png`} alt="logo" class="aspect-[6/5] object-contain"/>
			<p className="bg-offwhite border-[.1rem] rounded-full border-black px-[1vw] h-fit w-fit text-[1.5vh] bg-noise bg-blend-overlay text-[#101010] dark:bg-offblack dark:border-offwhite dark:bg-dark-noise dark:text-offwhite">{text}</p>
		</div>
		
	)
}

export default Skill