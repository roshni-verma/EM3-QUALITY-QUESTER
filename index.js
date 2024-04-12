/*// index.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/resumes', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Schema for Resume model
const resumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    education: String,
    experience: String,
    skills: [String]
});

// Model for Resume
const Resume = mongoose.model('Resume', resumeSchema);

// POST endpoint to create a new resume
app.post('/resumes', (req, res) => {
    const newResume = new Resume(req.body);
    newResume.save()
        .then(() => res.status(201).send('Resume created successfully'))
        .catch(err => res.status(500).send(err.message));
});

// GET endpoint to fetch all resumes
app.get('/resumes', (req, res) => {
    Resume.find({}, (err, resumes) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(resumes);
        }
    });
});

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));*/


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student-resume', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema and model for student
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    education: String,
    skills: String,
    experience: String
});
const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', (req, res) => {
    const newStudent = new Student(req.body);
    newStudent.save()
        .then(() => res.redirect('/resume'))
        .catch(err => console.error(err));
});

app.get('/resume', (req, res) => {
    Student.findOne({}, (err, student) => {
        if (err) {
            console.error(err);
            res.send('Error finding student');
        } else {
            res.render('resume', { student });
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));