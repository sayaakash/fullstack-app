import React from 'react';
import './style.css';


const ItemList = ({ items }) => {
    return (
        <div className="container mt-5 frm-box">
            <h2 className="text-center mb-4 headings">Item List</h2>
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
