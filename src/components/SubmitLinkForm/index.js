import React, {useState, useEffect} from "react";

export default function Index({url, setUrl, onSubmit}) {
	
	return <>
			<form className="row m-2" method="post">
				<div className="col-10 m-auto">
					<input 
						type="text" 
						className="form-control" 
						onChange={(e) => setUrl(e.target.value)}
						value={url} 
						placeholder="https://www.youtube.com/watch?v=BJp45Yi-FL0" 
					/>
				</div>
				{/* <div className="col-2">
					<button 
						type="submit" 
						className="btn btn-outline-dark"
						onClick={onSubmit}
					> 
						Grabit
					</button>
				</div> */}
			</form>
	</>;
}
