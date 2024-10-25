import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Card } from 'react-bootstrap';

const Education = () => {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getEdu');
                setEducation(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEducation();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <Card.Title style={{ fontSize: '24px' }}>Education</Card.Title>
                <ListGroup>
                    {education.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <strong style={{ fontSize: '18px' }}>{item.degree}</strong>
                            <p>{item.institution} - {item.year}</p>
                            <p>{item.highlights}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Education;