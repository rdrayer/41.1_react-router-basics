import React from "react";
import { Link } from "react-router-dom";

const Snack1 = () => {
    return (
        <div>
            <h3>Snack1</h3>
            <Link to="/">
                Back to vending machine
            </Link>
        </div>
    );
}

export default Snack1;