import React from 'react';
import './sidebar.css';

const SideBar = () => {
    return (
        <div className="col-lg-3 sidebar">
            <div className="list-group my-4">
                <a href="#!" className="list-group-item">Category 1</a>
                <a href="#!" className="list-group-item">Category 2</a>
                <a href="#!" className="list-group-item">Category 3</a>
            </div>
        </div>
    );
}

export default SideBar;