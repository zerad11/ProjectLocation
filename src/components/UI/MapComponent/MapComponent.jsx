import React, { useState, useEffect } from 'react';
import "./MapComponent.css";
import axios from 'axios';
import PointWithRadius from './PointWithRadius'; // Импортируем компонент PointWithRadius

const MapComponent = ({ scale, employees, x, y, radius }) => {
    const [mapImage, setMapImage] = useState('');

    useEffect(() => {
        const fetchMapImage = async () => {
            const selectedFloor = localStorage.getItem('selectedFloor');
            try {
                const response = await axios.get(`http://localhost:5000/map/${selectedFloor}`);
                setMapImage(response.data); // Сохраняем ответ в mapImage
            } catch (error) {
                console.error('Error fetching map image:', error);
            }
        };

        fetchMapImage();
    }, []);

    const containerStyle = {
        transform: `scale(${scale})`, // Масштабирование карты
    };

    return (
        <div className='mapContainer' style={containerStyle}>
            <img src={mapImage} alt="Map Image" />
            {employees && employees.length > 0 && employees.map(employee => (
                <PointWithRadius key={employee.id} x={employee.coordinates[0].x} y={employee.coordinates[0].y} radius={employee.coordinates[0].radius} />
            ))}
            {!employees && <PointWithRadius x={x} y={y} radius={radius} />}
        </div>
    );
};

export default MapComponent;
