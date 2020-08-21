const Board = require('../models/board');

function index(req, res) {
    Board.find({}, function(err, boards) {
        console.log(boards);
        res.render('boards/index', {title: 'Boards', boards: boards});
    });
};

function defineBoard(req, res) {
    res.render('boards/new', {title: 'Add Board'});
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
        res.render('boards/show', { title: 'Board', board});
        // , {title: 'Board', board: board, description: description}
    });

    // let board = Board.find({_id:req.params.boardId});
    // console.log(Board);

    // console.log(board);
    
    // console.log(req.params.boardId);
    // // Board.findById(req.params.id);
    // res.send(`details of ${req.params.boardId}`);
    
};

module.exports = {
    index: index,
    defineBoard: defineBoard,
    createBoard: createBoard,
    show: show
};