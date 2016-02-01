module.exports = function(sequelize, DataTypes){
  var Article = sequelize.define('Article', {
    id:           DataTypes.STRING,
    catagory:     DataTypes.STRING,
    title:        DataTypes.STRING,
    img:          DataTypes.STRING,
    publishedOn:  DataTypes.DATETIME,
    link:         DataTypes.STRING,
    miniDesc:     DataTypes.STRING,
    description:  DataTypes.STRING
  });
  return Article;
};
