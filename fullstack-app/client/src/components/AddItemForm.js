import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const AddItemForm = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/items', { name })
            .then(response => {
                onAdd(response.data);
                setName('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-5 frm-box">
            <h2 className="text-center mb-4 headings">Add Item</h2>
            <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label htmlFor="itemName" className="form-label">Item Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="itemName" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter item name"
                        required
                        />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 butn">Add Item</button>
                        </form>
                        </div>
                        );
                        };
                        
                        export default AddItemForm;
