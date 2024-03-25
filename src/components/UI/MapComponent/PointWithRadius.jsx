import React from 'react';

const PointWithRadius = ({ x, y, radius }) => {
    return (
        <>
            <div className="point" style={{ left: `${x}px`, top: `${y}px` }}></div>
            <div className="circle" style={{ left: `${x}px`, top: `${y}px`, width: `${radius * 2}px`, height: `${radius * 2}px` }}></div>
        </>
    );
};

export default PointWithRadius;
