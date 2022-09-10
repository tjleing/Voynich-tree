import { NodeSingular } from 'cytoscape';
import { Component } from 'react';
import Graph from './Graph';

type UnlockingGraphProps = {
    elements: cytoscape.ElementDefinition[],
    firstUnlocked: string,
};

function unlockGraph(node: NodeSingular) {
  node.neighborhood().removeClass("hidden");
}

class UnlockingGraph extends Component<UnlockingGraphProps> {
  render() {
    return (
        <Graph
          elements={this.props.elements}
          unlockedSelector={`node#${this.props.firstUnlocked}`}
          onNodeClick={unlockGraph}
        ></Graph>
    );
  }
}

export default UnlockingGraph;