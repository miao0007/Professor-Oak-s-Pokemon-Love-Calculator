module.exports = function (sequelize, DataTypes) {
  const Couple = sequelize.define("Couple", {
    name1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    compatability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return Couple;
};
