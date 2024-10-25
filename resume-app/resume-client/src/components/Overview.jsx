import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const Overview = () => {
    const [overview, setOverview] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOverview = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getOverview');
                setOverview(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOverview();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <Card.Title style={{ fontSize: '24px' }}>{overview.name}</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#555' }}>{overview.contact}</Card.Text>
                <Card.Text>{overview.objective}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Overview;