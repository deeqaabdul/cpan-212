import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Heading, Input, Image, UnorderedList, ListItem } from '@chakra-ui/react';

function App() {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [fetchedSingleFile, setFetchedSingleFile] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [users, setUsers] = useState([]);

  const handleSingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

  const handleMultipleFilesChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const uploadSingleFile = async () => {
    if (!singleFile) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append('file', singleFile);

    try {
      const response = await axios.post('http://localhost:8000/save/single', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert(response.data.message);
      setFetchedSingleFile(URL.createObjectURL(singleFile));  // Show the file immediately
    } catch (error) {
      console.error('Error uploading single file:', error);
      alert("Error uploading file.");
    }
  };

  const uploadMultipleFiles = async () => {
    if (multipleFiles.length === 0) {
      alert("Please select multiple files before uploading.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files', multipleFiles[i]);
    }

    try {
      const response = await axios.post('http://localhost:8000/save/multiple', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading multiple files:', error);
      alert("Error uploading files.");
    }
  };

  const fetchSingleFile = async () => {
    try {
      const response = await fetch('http://localhost:8000/fetch/single');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setFetchedSingleFile(url);
    } catch (error) {
      console.error('Error fetching single file:', error);
    }
  };

  const getRandomDogImage = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    setDogImage(response.data.message);
  };

  const uploadDogImage = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const dogImageURL = response.data.message;

    const formData = new FormData();
    const imageBlob = await fetch(dogImageURL).then((r) => r.blob());
    formData.append('file', new File([imageBlob], 'dog.jpg'));

    try {
      await axios.post('http://localhost:8000/save/single', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Dog image uploaded successfully!");
    } catch (error) {
      console.error('Error uploading dog image:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/fetch/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert("Failed to fetch users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box padding="20px">
      <Heading as="h1" size="lg">File Upload and Fetch App</Heading>

      <Box marginBottom="20px">
        <Heading as="h2" size="md">Upload Single File</Heading>
        <Input type="file" onChange={handleSingleFileChange} />
        <Button onClick={uploadSingleFile} colorScheme="blue" marginTop="10px">Upload Single File</Button>
      </Box>

      <Box marginBottom="20px">
        <Heading as="h2" size="md">Upload Multiple Files</Heading>
        <Input type="file" multiple onChange={handleMultipleFilesChange} />
        <Button onClick={uploadMultipleFiles} colorScheme="blue" marginTop="10px">Upload Multiple Files</Button>
      </Box>

      <Box marginBottom="20px">
        <Heading as="h2" size="md">Fetch Single File</Heading>
        <Button onClick={fetchSingleFile} colorScheme="blue">Fetch Single File</Button>
        {fetchedSingleFile && (
          <Box marginTop="10px">
            <Heading as="h3" size="sm">Single File</Heading>
            <Image src={fetchedSingleFile} alt="Fetched Single" boxSize="200px" marginTop="10px" />
          </Box>
        )}
      </Box>

      <Box marginBottom="20px">
        <Heading as="h2" size="md">Get Random Dog Image</Heading>
        <Button onClick={getRandomDogImage} colorScheme="blue">Get Random Dog Image</Button>
        {dogImage && <Image src={dogImage} alt="Random Dog" boxSize="300px" marginTop="10px" />}
      </Box>

      <Box marginBottom="20px">
        <Heading as="h2" size="md">Upload Random Dog Image</Heading>
        <Button onClick={uploadDogImage} colorScheme="blue">Upload Random Dog Image</Button>
      </Box>

      <Box marginBottom="20px">
        <Heading as="h2" size="md">Users</Heading>
        <UnorderedList>
          {users.map((user, index) => (
            <ListItem key={index}>{user.username}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default App;
