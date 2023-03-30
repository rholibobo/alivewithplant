const home = function(req, res) {
    res.render("index", { pagename: "index" })
} 

module.exports = home;