import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./cssComponent/checkboxtag.css"
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
function CheckBoxTag() {
    // State with list of all checked item
    const [checked, setChecked] = useState([]);
    const checkList = ["Anime", "Scenery", "Lake", "Other"];
    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    function handleCheckBox() {
        console.log(checked)
    }
    // Generate string of checked items
    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";
    // Return classes based on whether item is checked
    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";
    return (
        <>
            <div id="checkBoxSection">
                <div className="list-container">
                    {checkList.map((item, index) => (
                        <div key={index} style={{ display: 'inline-block' }}>
                            <input value={item} type="checkbox" onChange={handleCheck} />
                            <span className={isChecked(item)}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <div className="container-fluid" style={{ display: 'inline-block', textAlign: 'center' }}>
                <Button className="btn btn-primary" type="button" onClick={() => handleCheckBox()}>
                    Add tags
                </Button>
                <text>---</text>
                <Button className="btn btn-primary" type="button" onClick={() => handleCheckBox()}>
                    Finished
                </Button>
            </div>
        </>
    )
}

export default CheckBoxTag