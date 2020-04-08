module.exports = function specificMiddleware(req, res, next) {
    console.log(req.body);
  
    if (req.body.email.indexOf("@") >= 0) {
      next();
    } else {
      res.send("Not an email bruv");
    }
}
