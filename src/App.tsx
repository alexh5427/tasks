
import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

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
        </div>
    );
}

export default App;

