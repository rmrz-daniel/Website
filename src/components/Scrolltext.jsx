import React from "react";
import Marquee from "react-fast-marquee";

function ScrollText({text, speed, style, hoverPause, direction, insideStyle, amount, click}) {

	const array = new Array(parseInt(amount)).fill(text);
	return (
	  <Marquee speed={speed} loop={0} gradient={false} className={style} pauseOnHover={hoverPause} direction={direction}>
	  	{array.map(
	  		function(text, index){
	  			if(click === "LinkedIn"){
		  			return(
		  				<p key={index} onClick={() => {window.open("https://www.linkedin.com/in/rmrz-daniel/")}} className={insideStyle}> {text} </p>
		  			)
	  			} 
	  			else if (click === "Github"){
		  			return(
		  				<p key={index}  onClick={() => {window.open("https://github.com/rmrz-daniel")}} className={insideStyle}> {text} </p>
		  			)
	  			} 
	  			else {
		  			return(
		  				<p key={index}  className={insideStyle}> {text} </p>
		  			)
	  			}
	  		}
	  		)
	  	}
	  </Marquee>
	)

}

export default ScrollText