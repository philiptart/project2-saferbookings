const { Model, DataTypes } = require('sequelize');

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    students: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'student_ohh_group',
          key: 'student_id',
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'group',
  }
);

module.exports = Group;