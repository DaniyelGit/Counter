import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="wrap">
                <div className="counter">
                    <div className={'scoreboard'}>
                    <span className={'scoreboard__value'}>
                        101
                    </span>
                    </div>
                    <div className={'counter__buttons'}>
                        <div className={'counter__buttons_wrap'}>
                            <button className={'button button__inc'}>увеличить</button>
                            <button className={'button button__dec'}>уменьшить</button>
                        </div>
                        <div className={'wrap__button_set'}>
                            <button className={'button button__set'}>настроить</button>
                        </div>
                    </div>
                </div>
                <div className="settings">
                    <div className={'settings__wrap'}>
                        <div className={'settings__wrap_input'}>
                            <label className={'label'}>Минимальное:</label>
                            <input type={"number"} value={'0'}/>
                        </div>
                        <div className={'settings__wrap_input'}>
                            <label className={'label'}>Максимальное:</label>
                            <input type={"number"} value={'10'}/>
                        </div>
                    </div>
                    <div className={'settings__button'}>
                        <button className={'button button__set'}>Назад</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
