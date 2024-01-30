import React from "react";
import { Link } from "react-router-dom";

const Snack2 = () => {
    return (
        <div>
            <h3>This is Snack2</h3>
            <Link to="/">
                Back to vending machine
            </Link>
        </div>
    );
}

export default Snack2;