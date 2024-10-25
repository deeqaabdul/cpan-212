import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Card } from 'react-bootstrap';

const Qualifications = () => {
    const [qualifications, setQualifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQualifications = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getQualifications');
                setQualifications(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQualifications();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Card className="mb-4" style={{ padding: '15px' }}>
            <Card.Body>
                <Card.Title style={{ fontSize: '24px' }}>Highlights of Qualifications</Card.Title>
                <ListGroup>
                    {qualifications.map((item, index) => (
                        <ListGroup.Item key={index} style={{ fontSize: '16px' }}>
                            {item}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Qualifications;