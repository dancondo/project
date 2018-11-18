exports.index = (request, response, next) => {
    response.render('admin/index', { bar: [1, 2, 3] });
};