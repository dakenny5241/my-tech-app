const withAuth = (req, res, next) => {
    if (req.session.logged_in) {
        next();
        return;
    }
    res.redirect('/login');
}
module.exports = withAuth