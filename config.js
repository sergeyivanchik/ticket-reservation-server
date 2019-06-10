const dbConnectionString = `mongodb+srv://sergey:cthutq9874123@cluster0-69mdp.mongodb.net/cinemas?retryWrites=true&w=majority`;
const port = 8080;

const secretKey = 'nodeauthsecretkey';


module.exports = {
  dbConnectionString,
  secretKey,
  port
}
