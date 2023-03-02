import React, { useEffect, useState } from "react";

import BoardGame from "../components/BoardGame";
import CelulaGame from "../components/CelulaGame";

import styleMainGame from '../style/MainGame.module.css';


const MainGame = () => {

	const [contMap, setContMap] = useState(0);
	const [map, setMap] = useState([]);


	// Para testes, talveez fazer um JSON
	const arrayMapHouses = [ 
							[{value: true, sides: [3, 4]}, { value: true, sides: [1, 2] }, {value: false}, {value: false}, {value: false}, {value: true, sides: [3, 4]}, {value: false}, 
							{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false},
							{value: true, sides: [2, 3]}, {value: true, sides: [1]}, {value: false}, {value: false}, {value: false}, {value: true, sides: [2]}, {value: false}, {value: false}, {value: false}, 
							{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}],
		
							[{value: false}, { value: true, sides: [2] }, {value: false}, {value: false}, {value: false}, {value: true, sides: [3, 4]}, {value: false}, 
							{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false},
							{value: true, sides: [2, 3]}, {value: true, sides: [1]}, {value: false}, {value: false}, {value: false}, {value: true, sides: [2]}, {value: false}, {value: false}, {value: false}, 
							{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: true, sides: [2, 4]}, {value: true, sides: [3, 4]}]
	];


	const generateNewMap = (arrayMapHouses) => {

		console.log("----" + arrayMapHouses.length);

		console.log("generateNewMap.........");

		if(contMap < arrayMapHouses.length) {

			console.log("entrou?");

			setMap(arrayMapHouses[contMap]);

			console.log("contMap " + contMap);
			setContMap(contMap + 1);

		} else {
			console.log("Em breve mais mapas");
		}
	}


    return (
        <div className={styleMainGame.boxMainGame}>
            <h1>
                Hello World!!!
            </h1>
			<BoardGame arrayMap={map} />
			<div>
				<button onClick={() => generateNewMap(arrayMapHouses)}>Próximo</button>
			</div>
        </div>
    )
}

export default MainGame;