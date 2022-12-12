const firebaseConfig = {
    apiKey: "AIzaSyDX6k2dnZvbWuIricwWnRcLC4wsrEJ8ev8",
    authDomain: "portfolio-3fdf9.firebaseapp.com",
    databaseURL: "https://portfolio-3fdf9-default-rtdb.firebaseio.com",
    projectId: "portfolio-3fdf9",
    storageBucket: "portfolio-3fdf9.appspot.com",
    messagingSenderId: "687429071258",
    appId: "1:687429071258:web:f7844d45e7671f80e90a23"
  };
  firebaseConfig.initializeApp(firebaseConfig);

  var portfolioDB = firebaseConfig.database().ref('portfolio');

document.getElementById("contact Form").addEventListener("submit", function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var emailid = getElementVal("emailid");
var msgContent = getElementVal ("msgContent");
saveMessages (name, emailid, msgContent);

const saveMessages = (name, emailid, msgContent) => {
var newportfolio = new type(arguments) = portfolioDB.push();
 newPortfolio Form.set({
name: name,
emailid: emailid,
msgContent: msgContent,
});

}};