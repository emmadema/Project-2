//sends the user home
function home(req, res) {  
  res.render('index'); 
}

module.exports = { home: home,
};