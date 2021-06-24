import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // let newArr = [];

  // for(let i= 0; i < squares.length; i++)
  // {
  //   newArr = newArr.concat(squares[i]);
  // }

  // return newArr

  let row = squares.map((row) => {
    return row.map((square) => {
      return(
      <Square 
      key = { square.id }
      id= { square.id }
      value= { square.value }
      onClickCallback= {onClickCallback }
      />
    );
  });
  })
  return row
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
