import React from 'react';

const SkillCard = ({ icons }) => {
    return (
        <div className="card m-lg-2 m-1 p-lg-3 p-md-2 p-sm-2" style={{ maxWidth: "12rem" }}>
            <div className="card-body">
                <div className="icons text-center" style={{ fontSize: '3rem' }}>{icons}</div>
            </div>
        </div>
    );
};

export default SkillCard;
