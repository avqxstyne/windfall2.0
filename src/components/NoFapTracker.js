import React, { useEffect } from 'react';
import progressCircle from '../images/progress-circle.svg';
import { useState } from 'react';

const NoFapTracker = () => {
    const [noFapDayGoal, setNoFapDayGoal] = useState('');
    const [nfConfig, setNfConfig] = useState(false);
    const [dayGoal, setDayGoal] = useState(0)
    const [nfProgress, setNfProgress] = useState(0)

    useEffect(() => {
        const user = localStorage.id;
        console.log(`This users id: ${user}`);
        fetch(`http://localhost:5000/isnfconfig`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            user_id: user
        })
        }).then(res => {
            return res.json()
        }).then(resJson => {
            console.log(`This users config status: ${resJson.isnfconfigured}`);
            setNfConfig(resJson.isnfconfigured)
        },

        fetch('http://localhost:5000/nfgoal', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            user_id: user
        })
        }).then(res => {
            return res.json()
        }).then(resJson => {
            console.log(`This users day goal: ${resJson.dayGoal}`);
            setDayGoal(resJson.dayGoal)
            console.log(`time is :${(new Date().getTime()) - resJson.timeStarted}`);
        })
      )
    })


    function handleDayGoal(e) {
        if (isNaN(noFapDayGoal)) {
            alert("NoFap day goal must be a number");
            return 0;
        } else {
            const user = localStorage.id;
            fetch('http://localhost:5000/nofap', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                day_goal: noFapDayGoal,
                user_id: user
            })
            }).then(res => {
                return res.json()
            })
            e.preventDefault();
        }
      }

    return (
        <div id='nofaptracker'>
            {nfConfig === '1' ? (
                <div id='nofap-configured'>
                    <div id='nfc-text-left'>
                        <h1>NoFap Statistics</h1>
                        <div id='nfc-current-streak'>Current Streak: {100}d</div>
                        <div id='nfc-longest-streak'>Longest Streak: {1000}d</div>
                        <div id='nfc-goal-progress'>% Of Goal Completed: {45}%</div>
                    </div>
                    <div id='nfc-progress'>
                       <div id='nfc-progress-bar'>
                        <div id='nfc-progress-bar-inner'></div>
                       </div>
                    </div>
                    <div id='nfc-reset'>
                        <div id='nfc-reset-text-container'>
                        <div id='nfc-reset-text'>If you relapse, click here to reset your streak. Just remember that the streak is not what defines your progress</div>
                        <button id='relapse'
                        >Relapse</button>
                        </div>
                        <form method='POST' id='nfc-new-goal'>
                            <input 
                                type="text" 
                                required 
                                placeholder='New NoFap Day Goal'
                                onChange={(e) => {
                                    setNoFapDayGoal(e.target.value)
                                }}
                                name="nofapdaygoal"
                                value={noFapDayGoal}>
                            </input>
                            <button 
                                type='submit'
                                id='nfc-new-goal-submit'
                                onClick={(e) => {
                                handleDayGoal(e);
                                if (nfConfig === false) setNfConfig(true)
                                
                                }}
                            >Set New Goal</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div id='nofap-unconfigured'>
                    <div id='nofap-unconfigured-text'>
                        <h1>NoFap</h1>
                        <p>
                            You haven't configured a no-fap tracker yet. 
                            Click a few buttons here to get it up and running 
                            so that you can track your progress
                        </p>
                        <form method='POST'>
                            <input 
                                type="text" 
                                required 
                                placeholder='NoFap Day Goal'
                                onChange={(e) => {
                                    setNoFapDayGoal(e.target.value)
                                }}
                                name="nofapdaygoal"
                                value={noFapDayGoal}>
                            </input>
                            <button 
                                type='submit'
                                onClick={(e) => {
                                handleDayGoal(e);
                                setNfConfig(true)
                                }}
                            >Start</button>
                        </form>
                    </div>
                    
                    <div id='nofap-progress-circle-container'>
                        <img id="nofap-progress-circle" src={progressCircle} alt="progress circle" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default NoFapTracker;