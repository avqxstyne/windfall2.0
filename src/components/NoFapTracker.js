import React from 'react';
import progressCircle from '../images/progress-circle.svg';

const NoFapTracker = ({ configured }) => {
  return (
    <div id='nofaptracker'>
        {configured ? (
            <h1></h1>
        ) : (
            <div id='nofap-unconfigured'>
                <div id='nofap-unconfigured-text'>
                    <h1>NoFap</h1>
                    <p>
                        You haven't configured a no-fap tracker yet. 
                        Click a few buttons here to get it up and running 
                        so that you can track your progress
                    </p>
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