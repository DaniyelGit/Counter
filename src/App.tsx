import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useSpring} from "react-spring";



function App() {

    const [flipped, setFlipped] = React.useState(false);

    const { transform, opacity} = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 80 }
    });

    return (
        <div className="App">
            <div className="wrap">
                <Counter transform={transform} opacity={opacity}/>
                <Settings transform={transform} opacity={opacity}/>
            </div>
            <button onClick={() => setFlipped(!flipped)}>все получится Дима</button>
        </div>
    );
}

export default App;