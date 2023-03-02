import React, { useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";

import styleCelula from '../style/Celulas.module.css';


const CelulaGame = ({ house }) => {

	
	let styleCelulaBordasTop = styleCelula.celulaBordasTopBotton;
	let styleCelulaBordasRight = styleCelula.celulaBordasRightLeft;
	let styleCelulaBordasBotton = styleCelula.celulaBordasTopBotton;
	let styleCelulaBordasleft = styleCelula.celulaBordasRightLeft;

	if(house.value) {
		house.sides.forEach(side => {

			if(side == "1") {
				styleCelulaBordasTop = styleCelula.celulaBordasTopBottonArmadilha;
			}
			
			else if(side == "2") {
				styleCelulaBordasRight = styleCelula.celulaBordasRightLeftArmadilha;
			}

			else if(side == "3") {
				styleCelulaBordasleft = styleCelula.celulaBordasRightLeftArmadilha;

			} else {
				styleCelulaBordasBotton = styleCelula.celulaBordasTopBottonArmadilha;
			}
			
			
		});
	}

	

	return (
		<div className={styleCelula.boxCelula} id="celula">
			<div className={styleCelulaBordasTop} id="1" ></div>
			<div className={styleCelulaBordasRight} id="2" ></div>
			<div className={styleCelula.celulaCentro} ></div>
			<div className={styleCelulaBordasleft} id="3" ></div>
			<div className={styleCelulaBordasBotton} id="4" ></div>
		</div>	
	)
};

export default CelulaGame;