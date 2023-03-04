const home = function(req, res) {
    res.render("home", { pagename: "home" })
} 

module.exports = home;