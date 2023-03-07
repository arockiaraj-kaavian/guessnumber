import React, { useState } from "react";
import './systemguess.css'
function Systemguess(){





    const [ran,setRan]=useState('');


    return(<div className="btnArea">
            <button className="st">Start</button>
            <button className="low">Toolow</button>
            <button className="high">Toohigh</button>
            <button className="bingo">Bingo</button>
        </div>


    )





}
export default Systemguess;