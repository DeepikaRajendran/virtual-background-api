'use strict';
module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission', {
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    source_url: DataTypes.STRING,
    approved: DataTypes.BOOLEAN

  }, {});
  Submission.associate = function (models) {
    // associations can be defined here
  };
  return Submission;
};