const { Bar } = require("../db");

const getAllBooks = async () => {

    const book = await Bar.findAll({
      where: {
        active: true
      }
    });
    return book
  };
  
  
  module.exports = getAllBooks;