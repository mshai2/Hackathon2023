var piece = {
        whitePawn: {
            type: 'pawn',
            moved: false,
            number: 1,
            colour: white
        },
        whiteKnight: {
            type: 'knight',
            number: 2,
            colour: white
        },
        whiteBishop: {
            type:'bishop',
            number: 3,
            colour: white
        },
        whiteRook: {
            type:'bishop',
            number: 4,
            colour: white
        },
        whiteQueen: {
            type:'queen',
            number: 5,
            colour: white
        },
        whiteKing: {
            type:'king',
            check: false,
            number: 6,
            colour: white
        },
        blackPawn: {
            type: 'pawn',
            moved: false,
            number: -1,
            colour: white
        },
        blackKnight: {
            type: 'knight',
            number: -2,
            colour: white
        },
        blackBishop: {
            type:'bishop',
            number: -3,
            colour: white
        },
        blackRook: {
            type:'bishop',
            number: -4,
            colour: white
        },
        blackQueen: {
            type:'queen',
            number: -5,
            colour: white
        },
        blackKing: {
            type:'king',
            check: false,
            number: -6,
            colour: white
        }
}