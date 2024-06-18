import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div className="App">
            <ItemList items={items} />
            <AddItemForm onAdd={handleAddItem} />
        </div>
    );
};

export default App;
