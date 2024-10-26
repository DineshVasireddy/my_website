const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(bodyParser.json());

const feedbackFilePath = path.join(__dirname, '..', '..', 'public', 'feedback', 'feedback.xlsx');

if (!fs.existsSync(path.join(__dirname, '..', '..', 'public', 'feedback'))) {
    fs.mkdirSync(path.join(__dirname, '..', '..', 'public', 'feedback'));
}

app.post('/submit-feedback', (req, res) => {
    const newFeedback = req.body;

    let existingData = [];
    if (fs.existsSync(feedbackFilePath)) {
        const workbook = XLSX.readFile(feedbackFilePath);
        const sheetName = workbook.SheetNames[0];
        existingData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    }

    existingData.push(newFeedback);
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(existingData);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Feedback');

    XLSX.writeFile(newWorkbook, feedbackFilePath);

    res.json({ message: 'Feedback submitted successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});