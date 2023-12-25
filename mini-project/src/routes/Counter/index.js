import './index.scss';
import '../../App.css';
import '../../index.css';
import {useState} from 'react';

const Modal = ({open, setOpen, children}) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            {children}
        </div>
    </div>
);

export default function Counter() {
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const onClickPlus = () => {
        setCount(count + 1);
    };

    const onClickMinus = () => {
        setCount(count -1);
    };

    return (
        <div className="counter">
            <div>
                <h2>Counter:</h2>
                <h1>{count}</h1>
                <button className="counter__minus" onClick={onClickMinus}>- Minus</button>
                <button className="counter__plus" onClick={onClickPlus}>+ Plus</button>
            </div>
            <div className="counter__modal-block">
                <button className="counter__open-block_btn" onClick={() => setOpen(true)}>Finish ✨</button>
                <Modal open={open} setOpen={setOpen}>
                    <h3>Thank you!</h3>
                    <img src="https://media.giphy.com/media/NSPRepE2PvAcg/giphy.gif" alt="gif"/>
                </Modal>
            </div>
        </div>
    );
}