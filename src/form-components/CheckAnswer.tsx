import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, UpdateAnswer] = useState<string>("");
    function setAnswer(uAsnwer: React.ChangeEvent<HTMLInputElement>) {
        UpdateAnswer(uAsnwer.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="correctanswer" as={Row}>
                <Form.Label column sm={2}>
                    Answer:
                </Form.Label>
                <Col>
                    <Form.Control
                        style={{ padding: "10px" }}
                        value={answer}
                        onChange={setAnswer}
                    />
                </Col>
            </Form.Group>
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
