const { Model, DataTypes } = require('sequelize');

class Student extends Model {}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,20]
            }
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'group',
                key: 'id'
            }
        },
        parents: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
    }
);

module.exports = Student;
