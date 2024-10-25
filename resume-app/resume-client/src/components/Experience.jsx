import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Card } from 'react-bootstrap';

const Experience = () => {
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getExp');
                setExperience(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExperience();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Card className="mb-4" style={{ padding: '15px' }}>
            <Card.Body>
                <Card.Title style={{ fontSize: '24px' }}>Experience</Card.Title>
                <ListGroup>
                    {experience.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <strong style={{ fontSize: '18px' }}>{item.title} - {item.role}</strong>
                            <p>{item.duration}</p>
                            <p>{item.description}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Experience;