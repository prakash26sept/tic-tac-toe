import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
// import './App.css';
import { makeStyles, createStyles } from '@material-ui/core'

const style = makeStyles(theme => createStyles({
    '@global': {

    },
    row: {
        display: 'flex',
        '&>div': {
            border: '1px solid grey',
            width: '65px',
            fontSize: '24px',
            height: '65px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        justifyContent: 'space-between'
    },
    tictactoeBox: {
        border: '2px solid #166f7d',
        width: 'fit-content',
        // margin: '20px'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    extra: {
        padding: '0 20px'
    },
    reset: {
        backgroundColor: 'black',
        color: 'white',
        padding: '5px 12px',
        margin: '10px 0',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: 'grey',
            color: 'white',
            cursor: 'pointer'
        }
    },
    winner: {
        color: '#5fb002',
        fontSize: '40px'
    },
    rules: {
        width: '40%',
        margin: 'auto',
        fontSize: '24px',
        color: '#166f7d',
        textAlign: 'center',
        lineHeight: '37px',
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        }
    },
    moves: {
        backgroundColor: 'grey',
        color: 'white',
        padding: '2px 8px',
        margin: '7px 0',
        borderRadius: '4px',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
            cursor: 'pointer'
        }
    }

}
));

function Tictactoe() {

    const classes = style();

    const [symbol, setSymbol] = useState('O');
    const [winner, setWinner] = useState('');
    const [entries, setEntries] = useState([]);
    const [values, setValues] = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: ''
    });

    useEffect(() => {
        checkWin();
        console.log('called useeffect')
    }, [values, entries]);

    const playerClick = (e) => {
        let val = e.target.id;
        if (winner === '') {

            // checkWin();

            // console.log(val);
            // let newValues = values;

            if (symbol === 'O') {
                console.log(values[val])
                console.log(values)
                if (values[val] === '') {
                    setValues({
                        ...values,
                        [val]: symbol
                    });
                    setSymbol('X');

                    // console.log(values);
                }
            }

            else {

                if (values[val] === '') {
                    setValues({
                        ...values,
                        [val]: symbol
                    });
                    setSymbol('O');
                    // console.log(values);
                }


            }
            entries.push(values);
            // console.log(entries);
        }

        console.log(symbol);
    };

    const reset = () => {
        setValues({
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: ''
        });

        setEntries([]);

        setWinner('');

        document.getElementById('one').style.backgroundColor = 'white';
        document.getElementById('two').style.backgroundColor = 'white';
        document.getElementById('three').style.backgroundColor = 'white';
        document.getElementById('four').style.backgroundColor = 'white';
        document.getElementById('five').style.backgroundColor = 'white';
        document.getElementById('six').style.backgroundColor = 'white';
        document.getElementById('seven').style.backgroundColor = 'white';
        document.getElementById('eight').style.backgroundColor = 'white';
        document.getElementById('nine').style.backgroundColor = 'white';


        document.getElementById('nextplayer').style.display = 'block';
    }

    const showMoveValues = (e) => {
        let index = e.target.id;
        let moveObjects = entries[index];

        console.log(values);
        let one = moveObjects.one;
        let two = moveObjects.two;
        let three = moveObjects.three;
        let four = moveObjects.four;
        let five = moveObjects.five;
        let six = moveObjects.six;
        let seven = moveObjects.seven;
        let eight = moveObjects.eight;
        let nine = moveObjects.nine;

        setValues({
            ...values,
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine
        });
    }



    const checkWin = () => {
        if ((values.one === 'O' && values.two === 'O' && values.three === 'O') ||
            (values.one === 'X' && values.two === 'X' && values.three === 'X')) {
            document.getElementById('one').style.backgroundColor = '#5fb002';
            document.getElementById('two').style.backgroundColor = '#5fb002';
            document.getElementById('three').style.backgroundColor = '#5fb002';
            if (values.one === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }
        if ((values.four === 'O' && values.five === 'O' && values.six === 'O') ||
            (values.four === 'X' && values.five === 'X' && values.six === 'X')) {
            document.getElementById('four').style.backgroundColor = '#5fb002';
            document.getElementById('five').style.backgroundColor = '#5fb002';
            document.getElementById('six').style.backgroundColor = '#5fb002';
            if (values.four === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }
        if ((values.seven === 'O' && values.eight === 'O' && values.nine === 'O') ||
            (values.seven === 'X' && values.eight === 'X' && values.nine === 'X')) {
            document.getElementById('seven').style.backgroundColor = '#5fb002';
            document.getElementById('eight').style.backgroundColor = '#5fb002';
            document.getElementById('nine').style.backgroundColor = '#5fb002';
            if (values.seven === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }



        if ((values.one === 'O' && values.four === 'O' && values.seven === 'O') ||
            (values.one === 'X' && values.four === 'X' && values.seven === 'X')) {
            document.getElementById('one').style.backgroundColor = '#5fb002';
            document.getElementById('four').style.backgroundColor = '#5fb002';
            document.getElementById('seven').style.backgroundColor = '#5fb002';
            if (values.one === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }
        if ((values.two === 'O' && values.five === 'O' && values.eight === 'O') ||
            (values.two === 'X' && values.five === 'X' && values.eight === 'X')) {
            document.getElementById('two').style.backgroundColor = '#5fb002';
            document.getElementById('five').style.backgroundColor = '#5fb002';
            document.getElementById('eight').style.backgroundColor = '#5fb002';
            if (values.two === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }
        if ((values.three === 'O' && values.six === 'O' && values.nine === 'O') ||
            (values.three === 'X' && values.six === 'X' && values.nine === 'X')) {
            document.getElementById('three').style.backgroundColor = '#5fb002';
            document.getElementById('six').style.backgroundColor = '#5fb002';
            document.getElementById('nine').style.backgroundColor = '#5fb002';
            if (values.three === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }



        if ((values.one === 'O' && values.five === 'O' && values.nine === 'O') ||
            (values.one === 'X' && values.five === 'X' && values.nine === 'X')) {
            document.getElementById('one').style.backgroundColor = '#5fb002';
            document.getElementById('five').style.backgroundColor = '#5fb002';
            document.getElementById('nine').style.backgroundColor = '#5fb002';
            if (values.one === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }
        if ((values.three === 'O' && values.five === 'O' && values.seven === 'O') ||
            (values.three === 'X' && values.five === 'X' && values.seven === 'X')) {
            document.getElementById('three').style.backgroundColor = '#5fb002';
            document.getElementById('five').style.backgroundColor = '#5fb002';
            document.getElementById('seven').style.backgroundColor = '#5fb002';
            if (values.three === 'O') {
                setWinner('Winner is O');
                document.getElementById('nextplayer').style.display = 'none';
            } else {
                setWinner('Winner is X');
                document.getElementById('nextplayer').style.display = 'none';
            }
        }

        if (values.one !== '' && values.two !== '' && values.three !== '' && values.four !== '' && values.five !== '' && values.six !== '' && values.seven !== '' && values.eight !== '' && values.nine !== '') {
            setWinner('DRAW');
            document.getElementById('nextplayer').style.display = 'none';
        }
    };


    return (
        <div className={classes.main}>
            <div className={classes.rules}><h1>TIC TAC TOE</h1></div>
            <div className={classes.tictactoeBox}>
                <div className={classes.row}>
                    <div onClick={playerClick} id="one">{values.one}</div>
                    <div onClick={playerClick} id="two">{values.two}</div>
                    <div onClick={playerClick} id="three">{values.three}</div>
                </div>
                <div className={classes.row}>
                    <div onClick={playerClick} id="four">{values.four}</div>
                    <div onClick={playerClick} id="five">{values.five}</div>
                    <div onClick={playerClick} id="six">{values.six}</div>
                </div>
                <div className={classes.row}>
                    <div onClick={playerClick} id="seven">{values.seven}</div>
                    <div onClick={playerClick} id="eight">{values.eight}</div>
                    <div onClick={playerClick} id="nine">{values.nine}</div>
                </div>

            </div>
            <div className={classes.reset} id="reset" onClick={reset}>Reset</div>
            <div className={classes.extra}>
                <div id="nextplayer">Next Player: {symbol}</div>
                <div className={classes.winner}>{winner}</div>
                <div id="entries">
                    {entries.map((val, index) => {
                        return (<div key={index} id={index} className={classes.moves} onClick={showMoveValues}>Move {index}</div>)
                    })}
                </div>
            </div>
            <div className={classes.rules}>
                <h3>RULES FOR TIC-TAC-TOE</h3>

                1. The game is played on a 3 X 3 Grid.<br /><br />

                2. You are O, The Other Player is X.<br /> Players takes turn and mark their Move<br /><br />

                3. The first player to get 3 of Moves in<br /> Row, Column or Diagonally is the winner.<br /><br />

                4. When all 9 squares are full, the game is over.<br /> If no player wins, the game ends in a Tie.<br /><br />

                4. You can check the Previous Moves by clicking on specific move.


            </div>
        </div>
    );
}

export default Tictactoe;