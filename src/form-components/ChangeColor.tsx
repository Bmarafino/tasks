import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selColor, updateColor] = useState<string>();
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "Magenta",
        "White",
        "Black"
    ];
    function setColor(something: React.ChangeEvent<HTMLInputElement>) {
        updateColor(something.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map(
                (color: string): JSX.Element => (
                    <span key={color + "Div"}>
                        <Form.Label
                            style={{
                                backgroundColor: color,
                                display: "inline"
                            }}
                            key={color + "label"}
                        >
                            {color}
                        </Form.Label>
                        <Form.Check
                            inline
                            key={color}
                            type="radio"
                            name="colors"
                            onChange={setColor}
                            checked={color === selColor}
                            value={color}
                            style={{ backgroundColor: "color" }}
                        />
                    </span>
                )
            )}
            <br></br>
            <p style={{ display: "inline" }}>You have chosen </p>
            <p
                style={{ backgroundColor: selColor, display: "inline" }}
                data-testid="colored-box"
            >
                {selColor}
            </p>
        </div>
    );
}
