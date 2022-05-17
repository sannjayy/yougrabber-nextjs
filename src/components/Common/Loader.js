import React from 'react'

export default function Loader({style}) {
    if(style=='2'){
        return (
            <center>
                <div className="spinner-grow mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </center>
    )} else {
        return (
            <center>
                <div className="spinner-border mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </center>
        )
    }
}
