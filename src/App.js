import './App.css';
import cytoscape from 'cytoscape';
import React from 'react';

const elements = [
  { group: "nodes", data: { id: "n0" } },
  { group: "nodes", data: { id: "n1" } },
  { group: "nodes", data: { id: "n2" } },
  { group: "edges", data: { id: "e0", source: "n0", target: "n1" } },
  { group: "edges", data: { id: "e1", source: "n0", target: "n2" } },
];
const conf = {
  elements: elements,
  style: [
    {
      css: {
        "position-left": 0,
      },
    },
    {
      selector: "node",
      css: {
        label: "data(id)",
        "text-valign": "center",
        "text-halign": "center",
        height: "60px",
        width: "100px",
        shape: "rectangle",
        "background-color": "data(faveColor)",
      },
    },
    {
      selector: "edge",
      css: {
        "curve-style": "bezier",
        "control-point-step-size": 40,
        "target-arrow-shape": "triangle",
      },
    },
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cy: {}};
  }
  componentDidMount() {
    conf.container = this.cyRef;
    var cy = cytoscape(conf);
    cy.fit();
    cy.resize();
    this.setState({cy});
  }
  render() {
    let cyStyle = {
      height: '1000px',
      width: '1000px',
      "text-align": 'left',
//      margin: '20px 0px'
    };
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.  1 2 3
          </p>
          <div style={cyStyle} ref={(cyRef) => {this.cyRef = cyRef}}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
};

export default App;
