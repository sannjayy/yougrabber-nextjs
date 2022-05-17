import React, {useState, useEffect} from "react";

export default function Index({url, setUrl, placeholder, onSubmit}) {
	
	return <>
			<form className="row m-2" method="post">
				<div className="col-12 m-auto">
					<input 
						type="text" 
						className="form-control" 
						onChange={(e) => setUrl(e.target.value)}
						value={url} 
						placeholder={placeholder}
					/>
                    {/* <div className="input-group input-group-lg">
                        <span className="input-group-text">YouTube URL</span> 
                        <input 
                            type="text" 
                            onChange={(e) => setUrl(e.target.value)}
						    value={url} 
                            className="form-control" 
                            aria-label="YouTube Url" 
                            placeholder={placeholder}
                        />
                    </div> */}
				</div>
				<div className="col-12 ">
                    <center>
                        <button 
                            type="submit" 
                            className="btn btn-outline-dark mt-3"
                            onClick={onSubmit}
                        > 
                            Get Now
                        </button>
                    </center>
				</div> 
			</form>
	</>;
}
