const mairiadbConnect = require("./database/db.mariadb.connection");
const mongodbConnect = require("./database/db.mongodb.connection");
const { ErrorHandler } = require("./helper/respone_handle/error_handle");

module.exports = async function initConnection(callback) {
  try {
    const result = await mongodbConnect()
    console.log('success')
  } catch(e) {
    console.error(e)
  }

  



  
    // .then(() => {
    //   console.log("Mongoose Connecteds ...");
    // })
    // .catch((err) => {
    //   console.log("Mongoose connect fail ...");
    // });
  await mairiadbConnect()
    .then(() => console.log("mysql connected ... "))
    .catch(() => {
      console.log("mysql connect fail ... ");
    });
  callback();
};

const init = () => {
  return new Promise((resovle, reject) => {

  })
}