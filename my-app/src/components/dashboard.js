import React from 'react';

function Dashboard({strikes, balls, setStrikes, setBalls}) {

    const handleStrike = () => {
        if(strikes < 2) {
            setStrikes(strikes + 1);
        } else {
            setStrikes(0);
            setBalls(0);
        }
    }
  
    const handleBall = () => {
        if(balls < 3) {
            setBalls(balls + 1);
        } else {
            setBalls(0);
            setStrikes(0);
        }
    }
  
    const handleFoul = () => {
        if(strikes < 2) {
            setStrikes(strikes + 1);
        }
    }
  
    const handleHit = () => {
        setStrikes(0);
        setBalls(0);
    }

    return(
        <div>
            <button onClick={() => handleStrike()}>Strike</button>
            <button onClick={() => handleBall()}>Ball</button>
            <button onClick={() => handleFoul()}>Foul</button>
            <button onClick={() => handleHit()}>Hit</button>
        </div>
    );
}

export default Dashboard;