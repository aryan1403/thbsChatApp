const HandyStorage = require('handy-storage');
 
const storage = new HandyStorage({
    beautify: true
});
 
storage.connect('./information.json');

function loggedin() {
    storage.setState({
    
    });
}