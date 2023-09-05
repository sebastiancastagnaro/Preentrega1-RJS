

import React from 'react';

function ItemListContainer(props) {
    return (
        <div className="item-list-container">
            <p>{props.greeting}</p>
            {/* Acá se puede renderizar el catálogo de elementos */}
        </div>
    );
}

export default ItemListContainer;
