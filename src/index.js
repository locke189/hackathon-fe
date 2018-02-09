import sayHello from './js/hello';
import './index.scss';

document.getElementById('root').innerHTML = sayHello();

// Get a reference to the database service
var database = firebase.database();

const data = {
  david : {
    tags : 'chocolate',
  },
};

function writeUserData() {
  firebase.database().ref('users/').set(data);
}

writeUserData();

var starCountRef = firebase.database().ref('juan/uppercase');
starCountRef.on('value', function(snapshot) {
  document.getElementById('root').innerHTML = snapshot.val();
});
