const { Teacher } = require('../models');

const teacherData = [
    {
      teacher: 'M. Johnson',
      group_id: 5
    },
    {
      teacher: 'J. Richards',
      group_id: 4
    },
    {
      teacher: 'F. Rosenbury',
      group_id: 3
    },
    {
      teacher: 'M. Widestaff',
      group_id: 2
    },
    {
      teacher: 'T. Redsock',
      group_id: 1
    },
  ];
  
  const seedTeachers = () => Teacher.bulkCreate(teacherData);
  
  module.exports = seedTeachers;