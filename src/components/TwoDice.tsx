import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Model: one state per die, starting on different values so the
    // game is neither won nor lost before any rolls
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    // View: each die in its own span, a Roll button for each die
    // (the Controllers are the onClick handlers), and a win/lose message.
    // Snake eyes is checked first, since a pair of ones is also a match.
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>{" "}
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>{" "}
                <Button
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {leftDie === 1 && rightDie === 1 ?
                <div>Snake eyes! You Lose.</div>
            : leftDie === rightDie ?
                <div>You Win!</div>
            :   null}
        </div>
    );
}
