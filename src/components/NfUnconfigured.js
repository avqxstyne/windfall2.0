import React from 'react'
import progressCircle from '../images/progress-circle.svg';

const NfUnconfigured = ({ setNoFapDayGoal, handleDayGoal, setNfConfig, noFapDayGoal }) => {
  return (
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
  )
}

export default NfUnconfigured