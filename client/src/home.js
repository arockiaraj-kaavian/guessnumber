import React, { useState } from 'react';
import './home.css';
import {useNavigate} from 'react-router-dom';
function Home(){

    const [data,setData]=useState('');
    const navigate = useNavigate();

    function pagemove(){  
        const random = Math.floor(Math.random()*25);
        console.log(random,'raj');
        fetch('http://localhost:3001/checkrandom',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({random})
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            navigate(`/gngame/${data}`);
        })
        
}


return(<div className='title'>
        <h1>Play the game click button</h1>
    <div className='homepage'>

        <button className='play' onClick={pagemove}>Play ▶</button>
    </div>
    </div>
)

}
export default Home;