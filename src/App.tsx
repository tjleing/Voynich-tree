import './App.css';
import * as cytoscape from 'cytoscape';
import React, {Component} from 'react';
import UnlockingGraph from './graphs/UnlockingGraph';

const elements: cytoscape.ElementDefinition[] = [
  { group: "nodes", data: { id: "n0" } },
  { group: "nodes", data: { id: "n1" } },
  { group: "nodes", data: { id: "n2" } },
  { group: "nodes", data: { id: "n3" } },
  { group: "edges", data: { id: "e0", source: "n0", target: "n1" } },
  { group: "edges", data: { id: "e1", source: "n0", target: "n2" } },
  { group: "edges", data: { id: "e2", source: "n2", target: "n3" } },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.  1 2 3
          </p>
          <UnlockingGraph elements={elements} firstUnlocked={"n0"}></UnlockingGraph>
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
