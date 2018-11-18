exports.home = (request, response, next) => {
    response.render('pages/home');
}

exports.notFound = (request, response, next) => {
    response.render('pages/404');
}