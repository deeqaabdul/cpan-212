const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to the Resume API');
});
const overviewData = {
    name: "Deega Abdulkadir",
    contact: "(437) 445-7127 • abdulkadirdeeqa@gmail.com • Greater Toronto Area • LinkedIn",
    objective: "To secure an internship position where I can apply my academic knowledge, gain hands-on experience, and contribute to meaningful projects while further developing my skills in computer programming."
};

const educationData = [
    { degree: "Computer Programming and Analysis, Advanced Diploma (Co-op)", institution: "Humber College", year: "Sept. 2023-Present", highlights: "Dean’s List all semesters" }
];

const experienceData = [
    { title: "Say Somali, Non-Profit Organization", role: "Volunteer", duration: "Sept. 2021- Present", description: "Volunteered at the annual Software Data and Product Showcase as a panel member, where I collaborated with a diverse team to analyze and enhance software products aimed at supporting the Somali Community." },
    { title: "Digital Sisterhood Program Assistant", role: "Assistant", duration: "March 2020 - Present", description: "Managed email correspondence and social media accounts, responding to inquiries, engaging with followers, and promoting podcast episodes and events." },
    { title: "Screener at The Region of Peel Immunization Program", role: "Screener", duration: "May 2021 - Jan. 2023", description: "Greeted individuals attending vaccine clinics and conducted initial screenings to ensure eligibility for vaccination based on provincial requirements." }
];

const qualificationsData = [
    "Proficient in programming languages including Java, JavaScript, React, React Native, Python, C++, HTML/CSS, and SQL.",
    "Developed several hands-on projects, including a Thesaurus App using React and Axios (API integration), a Weather App leveraging OpenWeatherMap API, and a Mobile Task Manager built with React Native.",
    "Strong problem-solving abilities with a proven track record of identifying and resolving technical issues to optimize software performance."
];

app.get('/getOverview', (req, res) => {
    res.json(overviewData);
});

app.get('/getEdu', (req, res) => {
    res.json(educationData);
});

app.get('/getExp', (req, res) => {
    res.json(experienceData);
});

app.get('/getQualifications', (req, res) => {
    res.json(qualificationsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});