import { NodeSingular } from 'cytoscape';
import { Component } from 'react';
import Graph from './Graph';

type UnlockingGraphProps = {
    elements: cytoscape.ElementDefinition[],
    firstUnlocked: string,
};

function unlockGraph(node: NodeSingular) {
  var toUnlock = node.neighborhood(".hidden");
  toUnlock.removeClass("hidden");
  toUnlock.style({opacity: 0});
  toUnlock.animate({
    style: {opacity: 1},
    duration: 600,
    easing: 'ease-in-sine',
  });
}

class UnlockingGraph extends Component<UnlockingGraphProps> {
  tick() {
    // check all node unlock
  }

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