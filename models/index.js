const Student = require('./Student');
const Teacher = require('./Teacher');
const Parent = require('./Parent');
const Group = require('./Group');

Student.hasMany(Parent, {
    foreignKey: 'children',
});
Parent.belongsTo(Student, {
    foreignKey: 'children',
    onDelete: 'CASCADE'
});

Group.hasMany(Student, {
    foreignKey: 'group_id',
});
Student.belongsTo(Group, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});

Teacher.hasOne(Group, {
    foreignKey: 'teacher_id',
});
Group.belongsTo(Teacher, {
    foreignKey: 'teacher_id',
    onDelete: 'CASCADE'
});

module.exports = { Student, Teacher, Parent, Group };