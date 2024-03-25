import React, { useState, useEffect } from 'react';
import './floor.css';
import MapComponent from '../MapComponent/MapComponent';

const Floor = () => {
    const storedFloor = localStorage.getItem('selectedFloor');
    const initialFloor = storedFloor ? parseInt(storedFloor) : 1;
    const [selectedFloor, setSelectedFloor] = useState(initialFloor);
    const [floorImage, setFloorImage] = useState('');

    useEffect(() => {
        localStorage.setItem('selectedFloor', selectedFloor.toString());
    }, [selectedFloor]);

    const handleFloorChange = (event) => {
        const floor = parseInt(event.target.value);
        setSelectedFloor(floor);
    };

    return (
        <div className='container'>
            <div className='select-wrapper'>
                <h4>этаж</h4>
                <select onChange={handleFloorChange} value={selectedFloor}>
                    {[1, 2, 3, 4].map((floorNum) => (
                        <option key={floorNum} value={floorNum}>{floorNum}</option>
                    ))}
                </select>
            </div>
            <MapComponent floorImage={floorImage} />
        </div>
    );
};

export default Floor;
