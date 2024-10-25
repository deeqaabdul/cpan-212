import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';
import Qualifications from './components/Qualifications';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    return (
        <Container style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f9fa' }}>
            <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Online Resume</h1>
            <Row>
                <Col>
                    <Overview />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Qualifications />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Education />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Experience />
                </Col>
            </Row>
        </Container>
    );
};

export default App;