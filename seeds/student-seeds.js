const { Student } = require('../models');

const studentData = [
    {
        name: 'John',
        group_id: 1,
        parents: 'Peter',
    },
    {
        name: 'Jess',
        group_id: 2,
        parents: 'Jenny',
    },
    {
        name: 'Jake',
        group_id: 3,
        parents: 'Steven',
    },
    {
        name: 'Kelly',
        group_id: 4,
        parents: 'Andrew',
    },
    {
        name: 'Liam',
        group_id: 5,
        parents: 'Micheal',
    },
  ];
  
  const seedStudents = () => Student.bulkCreate(studentData);
  
  module.exports = seedStudents;