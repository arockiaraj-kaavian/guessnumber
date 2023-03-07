/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './game.css';

function Gngame() {


    const [guess, setGuess] = useState('');
    const [rdata, setRdata] = useState('');
    const [wdata, setWdata] = useState('');
    const [random, setRandom] = useState('');
    const [count, setCount] = useState([]);
    const [hintdata, setHintdata] = useState('');
    const navigate = useNavigate();

    const token = useParams();
    console.log(token, 'check');

    function homepage() {
        navigate('/');
    }

    function check() {

        let arr=[];
        setCount((count) => ([...count, 1]))
        if (count.length <=3) {
            fetch('http://localhost:3001/checknumber', {

                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ token })
            }).then((res) => res.json())
                .then((data) => {
                    setRandom(data);
                    console.log(data.random);

                    // console.log(random, 'rock');
                    console.log(typeof (+guess), 'uinput');
                    console.log(typeof (data.random), 'ran');

                    if (data.random === +guess) {

                        setRdata('Your guess is correct,You won the game');
                        // navigate('/');
                    }
                    else {
                        setWdata('Your guess is wrong');
                        
                        if (data.random > +guess && count.length===0){
                            setHintdata('The number is bigger than your guess');
                        }else if (data.random < +guess && count.length===0){
                            setHintdata('The number is smaller than your guess'); 
                        }
                        else if(data.random%2===0 && count.length===1){
                            setHintdata('The number is even number');
                        } else if(data.random%2!==0 && count.length===1){
                            setHintdata('The number is odd number');

                        }else if(count.length===2){
                            for(let i=1;i<=data.random;i++){
                                if(data.random%i===0){
                                    arr.push(i);
                                }
                                console.log(arr);
                            }
                            if(arr.length===2 || arr.length===1){
                                setHintdata(`It's a a factor of ${arr[1]}`);
                                arr=[];
                            }else if(arr.length===0){
                                setHintdata(`It has no factors`);
                                arr=[];
                            }else{
                                setHintdata(`It is a factors of ${arr[1]},${arr[2]}`);
                                arr=[];
                            }
                        }

                         
                        
                        
                        
                    }
                })

        } else {
            setWdata('Yours turns are completed,you loss...');
            // navigate('/');
        }


    }
    return (
        <div className='App'>
            <div className="App-header">
                <h1 className='title'>Guess the number</h1>
            </div>
            <div className='image-container'>
                <div className='getnumber'>
                    <h2>Enter your Guessing number in range of 1 to 25 </h2>
                </div>
                <div className='moves'>
                    <h3>You have Four chances to guess</h3>
                    {rdata ? <div className='rightstmt'>{rdata}</div> : wdata ?
                        <div>
                            <div className='wrongstmt'>{wdata}</div><div className='hint'> {hintdata} </div>
                        </div>
                        : ''}

                </div>
                <div></div>
                    <div className='guess'>
                    <input type='text' className='input' value={guess} onChange={e => setGuess(e.target.value)} />
                    </div>
                    <button className='button' onClick={check}>guess</button>

                <button className='back' onClick={homepage}>Play Again</button>
            </div>
        </div>


    );
}

export default Gngame;
