import {useState} from "react";

export default function ColorAndCar() {
    const [cars, setCar] = useState(["mercedes", "audi"]);
    const [colors, setColor] = useState(["yellow", 'black']);
    const [selectedCar, setSelectedCar] = useState({car: "", color: ""});

    function changeCar(index) {

    }

    function changeColor(index) {

    }


    return (
        <>
            <div>
                <h1>Select your car</h1>
                Select a car
                <select onChange={event => changeCar(event.target.value)}>
                    {cars.map((item, index) => (
                        <option value={index}>{item}</option>
                    ))}
                </select>
            </div>
            <div>
                Select a color
                <select onChange={event => changeColor(event.target.value)}>
                    {colors.map(item => (
                        <option>{item}</option>
                    ))}
                </select>
            </div>
            <h1>You selected a {changeCar()} - {cars[0]}</h1>
        </>
    )

}