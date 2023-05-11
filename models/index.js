const Student = require('./Student');
const Teacher = require('./Teacher');
const Parent = require('./Parent');
const Group = require('./Group');

Group.hasMany(Student, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});
Student.belongsTo(Group, {
    foreignKey: 'group_id'
});

Student.hasMany(Parent, {
    foreignKey: 'children',
    onDelete: 'CASCADE'
});
Parent.belongsTo(Student, {
    foreignKey: 'children'
});

Group.hasOne(Teacher, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});
Teacher.belongsTo(Group, {
    foreignKey: 'group_id'
});