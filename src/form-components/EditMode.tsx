import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editable, updateEditable] = useState<boolean>(false);
    const [isStudent, updateIsStudent] = useState<boolean>(true);
    const [studentname, updatestudentname] = useState<string>("Your Name");

    function setStudentName(entered: React.ChangeEvent<HTMLInputElement>) {
        updatestudentname(entered.target.value);
    }

    function seteditable(entered: React.ChangeEvent<HTMLInputElement>) {
        updateEditable(entered.target.checked);
    }

    function setisStudent(entered: React.ChangeEvent<HTMLInputElement>) {
        updateIsStudent(entered.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    id="CanEdit"
                    checked={editable}
                    onChange={seteditable}
                />
                {editable && (
                    <>
                        <Form.Control
                            onChange={setStudentName}
                            value={studentname}
                            disabled={!editable}
                        />
                        <Form.Label htmlFor="isStudent">student</Form.Label>
                        <Form.Check
                            type="checkbox"
                            id="isStudent"
                            name="student"
                            checked={isStudent}
                            onChange={setisStudent}
                            disabled={!editable}
                        />
                    </>
                )}
            </Form.Group>
            <p>
                {studentname} is {isStudent ? "" : "not"} a student
            </p>
        </div>
    );
}
