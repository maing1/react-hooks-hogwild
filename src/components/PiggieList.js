import React from "react";
import PiggieCard from './PiggieCard'

function PiggieList({ hogs }) {
  return (
		<div className="ui three stackable cards">
			{hogs.map(hog => (
				<PiggieCard
					key={hog.name}
					hog={hog}
				/>
			))}
		</div>
  );
}

export default PiggieList;