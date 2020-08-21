var Board = require('../models/board');

function create(req, res) {
    Board.findById(req.params.id, function(err, board) {
        board.poems.push(req.body);
        board.save(function(err) {
            res.redirect(`/boards/${board._id}`);
        });
        // console.log(board.poems);
    });
};

module.exports = {
    create: create
};