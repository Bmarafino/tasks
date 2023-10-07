import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, updateAttempts] = useState<number>(3);
    const [reuquested, updatereuquested] = useState<number>(0);
    function setAttempts() {
        updateAttempts(reuquested + attempts);
    }
    function setRequested(set: React.ChangeEvent<HTMLInputElement>) {
        updatereuquested(Number(set.target.value));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <h3>You have {attempts}</h3>
            <Form.Group>
                <Form.Label>Add attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={reuquested}
                    onChange={setRequested}
                />
                <Button onClick={setAttempts}>gain</Button>
                <Button
                    disabled={attempts === 0}
                    onClick={() => updateAttempts(attempts - 1)}
                >
                    use
                </Button>
            </Form.Group>
        </div>
    );
}
