const mongodb = require('../config/mongodb.js');
const ObjectId = require('mongodb').ObjectId;

const student = 'students';

const studentSchema = {
    studentID: 'studentID',
    studentName: 'studentName',
    studentPass: 'studentPass',
}