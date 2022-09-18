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

type GameState = {
  money: number,
};

class App extends Component<GameState> {
  state: GameState = {
    money: 0,
  };

  constructor(props: any) {
    super(props);
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState((state: GameState) => {state.money++; return state});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.  1 2 3
          </p>
          <p>
            money: {this.state && this.state.money}
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
