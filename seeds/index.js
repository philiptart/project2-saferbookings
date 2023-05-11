const seedGroups = require('./group-seeds');
const seedParents = require('./parent-seeds');
const seedStudents = require('./student-seeds');
const seedTeachers = require('./teacher-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGroups();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedParents();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedStudents();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedTeachers();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
