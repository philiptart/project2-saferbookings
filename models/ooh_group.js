const { Model, DataTypes } = require('sequelize');

class OOH_Group extends Model {} // out-of-hours groups

OOH_Group.init(
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
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'ooh_group',
  }
);

module.exports = OOH_Group;