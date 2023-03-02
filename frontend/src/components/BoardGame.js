import React, { useEffect, useState } from "react";

import CelulaGame from "./CelulaGame";

import styleBoardGame from '../style/BoardGame.module.css';
import styleCelula from '../style/Celulas.module.css';


const BoardGame = ({ arrayMap }) => {

	console.log("e ai? " + arrayMap.length);

	return (
		<div className={styleBoardGame.boxBoardGame} id="board">
			{arrayMap.map((house, index) => (
				
				<CelulaGame key={index} house={house} />
			))}

		</div>
	)
};

export default BoardGame;