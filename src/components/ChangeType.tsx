import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // Model: the current question type, starting as a short answer question
    const [type, setType] = useState<QuestionType>("short_answer_question");

    // Controller: switch to whichever type we are not currently using
    function changeType(): void {
        setType(
            type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question"
        );
    }

    // View: the button, plus a human-friendly label for the current type
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {type === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </div>
    );
}
