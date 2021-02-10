import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen ] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const clickBody = (event) => {
            if(ref.current && ref.current.contains(event.target)) return;
            setOpen(false);
        }

        document.body.addEventListener('click', clickBody)

        return () => {
            document.body.removeEventListener('click', clickBody);
        }
    }, []);

    const renderedOpt = options.map(option => {
        if(option.value === selected.value) return null;

        return <div key={option.value} onClick={() => onSelectedChange(option)} className="item">
            {option.label}
        </div>
    })

    return <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">{label} </label>
            <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open ? 'visible transition' : ''}`}>
                    {renderedOpt}
                </div>
            </div>
        </div>
    </div>
}

export default Dropdown;