const { Group } = require('../models');

const groupData = [
    {
      teacher: 'M. Johnson',
      students: 1
    },
    {
      teacher: 'J. Richards',
      students: 2
    },
    {
      teacher: 'F. Rosenbury',
      students: 3
    },
    {
      teacher: 'M. Widestaff',
      students: 4
    },
    {
      teacher: 'T. Redsock',
      students: 5
    },
  ];
  
  const seedGroups = () => Group.bulkCreate(groupData);
  
  module.exports = seedGroups;