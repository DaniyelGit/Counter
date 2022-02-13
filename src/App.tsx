import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";




function App() {
    return (
        <div className="App">
            <div className="wrap">
                <Counter/>
                <Settings/>
            </div>
        </div>
    );
}

export default App;
