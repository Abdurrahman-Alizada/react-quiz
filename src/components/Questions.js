import React from 'react'

export default function Questions({question}) {
    return (
        <div >
            <span className="float-left-auto text-danger mr-2">Q.</span>
            <span dangerouslySetInnerHTML= {{__html :  question  }}></span>
            {/* <h3 className="card-title">{question}</h3> */}
        </div>
    )
}
