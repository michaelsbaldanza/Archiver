const Board = require('../models/board');

function index(req, res) {
    Board.find({}, function(err, boards) {
        console.log(boards);
        res.render('boards/index', {pagetitle: 'Boards', boards: boards});
    });
};

function defineBoard(req, res) {
    res.render('boards/new', {pagetitle: 'Add Board'});
};

function createBoard(req, res) {
    console.log(req.body);
    const board = new Board(req.body);
    board.save(function(err){
        if (err) return res.render('boards/new');
    })
    res.redirect(`/boards/${board._id}`);
    //how to handle this - redirect to page of newly created board?
};

function show(req, res) {
    console.log(req.params.boardId);
    Board.findById(req.params.boardId, function(err, board) {
        console.log(board);
        res.render('boards/show', { pagetitle: 'Board', board});
    });
};

module.exports = {
    index: index,
    defineBoard: defineBoard,
    createBoard: createBoard,
    show: show
};