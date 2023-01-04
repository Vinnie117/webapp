import React from 'react'
// import ReactDataSheet from 'react-datasheet';
import Datasheet from 'react-datasheet';
import './Datasheet.css';


export class BasicSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [
          { readOnly: true, value: '' },
          { value: 'Variable A', readOnly: false}, 
          { value: 'Variable G', readOnly: false},
          { value: 'Variable B', readOnly: false},
          { value: 'Variable D', readOnly: false},
        ],
        [
          { readOnly: true, value: 1 },
          { value: 1000 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 2 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 },
        ],
        [
          { readOnly: true, value: 3 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 4 },
          { value: 2 },
          { value: 45 },
          { value: 4 },
          { value: 777 },
        ],
      ],
    };
  }
  valueRenderer = cell => cell.value;
  onCellsChanged = changes => {
    const grid = this.state.grid;
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    this.setState({ grid });
  };
  onContextMenu = (e, cell, i, j) =>
    cell.readOnly ? e.preventDefault() : null;

  render() {
    return (
      <>



      <Datasheet
        data={this.state.grid}
        valueRenderer={this.valueRenderer} 
        onContextMenu={this.onContextMenu}
        onCellsChanged={this.onCellsChanged}
      />


      <input type='submit'></input>
      


      </>
    );
  }
}
