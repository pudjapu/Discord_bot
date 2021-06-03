const RainbowSixApi = require('rainbowsix-api-node');
const R6 = new RainbowSixApi(); 

module.exports = function get_r6(username,platform){
  const user = username;
  let Platform = platform;
  
  (Platform === 'PC'|Platform === 'Pc'| Platform === 'pc') ? Platform = 'uplay' : Platform = Platform;

  R6.stats(user, Platform, ).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error)
});

R6.profile(user, Platform).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
}