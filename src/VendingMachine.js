import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
    return (
        <div>
         <ul>
            <li><Link to="/snack1">Snack1</Link></li>
            <li><Link to="/snack2">Snack2</Link></li>
            <li><Link to="/snack3">Snack3</Link></li>
         </ul>
        </div>
    );
}

export default VendingMachine;

/*
What does this mean? Your application should consist of the following:

- A ***VendingMachine*** component, which shows a page with a list of snacks 
that you can get from the vending machine.
- At least three different snack components, each one corresponding 
to a vending machine snack.
- By clicking on an item in the ***VendingMachine*** you can view one of 
things inside of the machine. Clicking should update the URL and show the snack 
that you’ve clicked on.
- From each snack component, you should be able to go back to the main ***VendingMachine*** 
component.
*/