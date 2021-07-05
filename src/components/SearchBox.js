import React from 'react'
import "../App.css"

const SearchBox = (props) => {
	return (
		<div>
			<form className="searchBox">
				<input 
					className="searchDesign"  
					type="text" 
					placeholder="search name"
					value={props.search}
				 	onChange={props.handleChange} 
				 />
			</form>
		</div>
	)
}

export default SearchBox;