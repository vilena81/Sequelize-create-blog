// import { Sequelize, DataType } from "sequelize";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Blog', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      text: DataTypes.STRING,
      rating: DataTypes.STRING
    });
  
    return Blog;
  };
  

  

 