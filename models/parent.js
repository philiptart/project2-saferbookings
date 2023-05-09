const { Model, DataTypes } = require('sequelize');

class Parent extends Model {}

Parent.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            isEmail: true,
            }
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'parent',
    }
);

module.exports = Parent;