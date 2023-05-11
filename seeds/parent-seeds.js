const { Parent } = require('../models');

const parentData = [
    {
        name: 'Peter',
        email: 'Peter@blabla.com',
        children: 'John',
    },
    {
        name: 'Jenny',
        email: 'Jenny@blabla.com',
        children: 'Jess',
    },
    {
        name: 'Steven',
        email: 'Steven@blabla.com',
        children: 'Jake',
    },
    {
        name: 'Andrew',
        email: 'Andrew@blabla.com',
        children: 'Kelly',
    },
    {
        name: 'Micheal',
        email: 'Micheal@blabla.com',
        children: 'Liam',
    },
  ];
  
  const seedParents = () => Parent.bulkCreate(parentData);
  
  module.exports = seedParents;