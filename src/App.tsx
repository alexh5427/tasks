
import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <h1>UM COS420 with React Hooks and TypeScript</h1>

                <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder"
                />

                <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                </ul>

                <Button
                    className="btn btn-primary"
                    onClick={() => console.log("Hello World!")}
                >
                    Log Hello World
                </Button>

                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>

                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>

            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
        </div>
    );
}

export default App;

