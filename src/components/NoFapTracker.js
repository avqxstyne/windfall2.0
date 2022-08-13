import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import NfConfigured from './NfConfigured';
import NfUnconfigured from './NfUnconfigured';

const NoFapTracker = () => {
    const [noFapDayGoal, setNoFapDayGoal] = useState('');
    const [nfConfig, setNfConfig] = useState(false);

    const nfcGoalRef = useRef();

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
            let percentCompleted = Math.round((percentage((new Date().getTime()) - resJson.timeStarted, (resJson.dayGoal  * 24 * 60 * 60 * 1000))) * 100) / 100;    
            document.getElementById("nfc-progress-bar-inner").style.width = `${percentCompleted}%`;
            nfcGoalRef.current.innerText = `% of goal completed: ${percentCompleted}%`
            
        })
    )})
    
    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
     } 

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

    function handleRelapse() {
        const user = localStorage.id;
        fetch('http://localhost:5000/relapse', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            user_id: user
        })
        }).then(res => {
            return res.json()
        })
    }


    return (              
        <div id='nofaptracker'>
            {nfConfig === '1' ? (
                <NfConfigured  
                    nfcGoalRef={nfcGoalRef}
                    handleRelapse={handleRelapse}
                    handleDayGoal={handleDayGoal}
                    setNoFapDayGoal={setNoFapDayGoal}
                    setNfConfig={setNfConfig} 
                    nfConfig={nfConfig}
                    noFapDayGoal={noFapDayGoal}
                />
            ) : (
                <NfUnconfigured 
                    handleDayGoal={handleDayGoal}
                    setNfConfig={setNfConfig}
                    setNoFapDayGoal={setNoFapDayGoal}
                    noFapDayGoal={noFapDayGoal}
                />
            )}
        </div>
    )
}

export default NoFapTracker;