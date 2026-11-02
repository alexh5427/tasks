import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // Model: whether the answer is currently visible (hidden at first)
    const [visible, setVisible] = useState<boolean>(false);

    // Controller: flip the visibility to its opposite value
    function flipVisibility(): void {
        setVisible(!visible);
    }

    // View: the button, plus the answer only when `visible` is true
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
