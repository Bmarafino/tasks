import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, updateChoice] = useState<string>(options[0]);
    function setChoice(select: React.ChangeEvent<HTMLSelectElement>) {
        updateChoice(select.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userEmotions">
                <Form.Label>Question?</Form.Label>
                <Form.Select value={choice} onChange={setChoice}>
                    {options.map(
                        (i: string): JSX.Element => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        )
                    )}
                </Form.Select>
            </Form.Group>
            <p>{choice === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
