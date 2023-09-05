

import React from 'react';

function CartWidget() {
    return (
        <div className="cart-widget">
            {/* Se puede usar un carrito acá */}
            <span className="cart-icon">🛒</span>
            {/* Es para poner la cantidad */}
            <span className="cart-notification">5</span>
        </div>
    );
}

export default CartWidget;
