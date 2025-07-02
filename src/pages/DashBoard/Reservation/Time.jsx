import { useState } from 'react';
import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';


const Time = () => {

    const [value, onChange] = useState('10:00');

    return (
        <div>
            <TimePicker onChange={onChange} value={value} className="input input-bordered w-[300px]" />
        </div>
    );
};

export default Time;