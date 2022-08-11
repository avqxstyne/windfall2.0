import React from 'react'

const NfConfigured = ({ nfcGoalRef, handleRelapse, handleDayGoal, setNoFapDayGoal, setNfConfig, nfConfig, noFapDayGoal }) => {
  return (
    <div id='nofap-configured'>
        <div id='nfc-text-left'>
            <h1>NoFap Statistics</h1>
            <div id='nfc-current-streak'>Current Streak: {100}d</div>
            <div id='nfc-longest-streak'>Longest Streak: {1000}d</div>
            <div id='nfc-goal-progress' ref={nfcGoalRef}>% Of Goal Completed: {45}%</div>
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
            onClick={handleRelapse}
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
  )
}

export default NfConfigured