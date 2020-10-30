import React from 'react'

export default function Answers({ answer, onAnswer  }) {
    //  console.log(answer)
    return (
        <div>
            <label className="btn btn-lg btn-block btn-secondary my-1">
                <input style={{ marginRight: '10px' }} type="radio" name="options" id="option1"
                    onClick={() => onAnswer(answer)} />
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </label>
        </div>
    )
}
