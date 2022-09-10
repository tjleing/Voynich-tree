import cytoscape from 'cytoscape';
import React, { Component } from 'react';

const style: cytoscape.Stylesheet[] = [
  {
    selector: "node",
    css: {
      label: "data(id)",
      "text-valign": "center",
      "text-halign": "center",
      height: "60px",
      width: "100px",
      shape: "barrel",
    },
  },
  {
    selector: "node.hidden",
    css: {
      display: "none",
    }
  },
  {
    selector: "edge",
    css: {
      "curve-style": "bezier",
      "control-point-step-size": 40,
      "target-arrow-shape": "triangle",
    },
  },
];

type GraphProps = {
    elements: cytoscape.ElementDefinition[],
    onNodeClick?: (node: cytoscape.NodeSingular) => void,
    onEdgeClick?: (edge: cytoscape.EdgeSingular) => void,
    unlockedSelector: string,
};

class Graph extends Component<GraphProps> {
  private cyRef: HTMLDivElement | null = null;
  constructor(props: GraphProps) {
    super(props);
    this.state = {cy: {}};
  }
  componentDidMount() {
    const conf: cytoscape.CytoscapeOptions = {
      elements: this.props.elements,
      style: style,
      container: this.cyRef,
    };
    var cy: cytoscape.Core = cytoscape(conf);
    cy.zoom(1);
    cy.center(cy.filter('#n0'));
    cy.nodes().addClass("hidden")
    cy.nodes(this.props.unlockedSelector).removeClass("hidden");
    console.log(cy.nodes());
    cy.on("select", (evt) => {
      const ele: cytoscape.NodeSingular | cytoscape.EdgeSingular = evt.target;
      /*
      cy.animate({
        zoom: 1,
        center: {
          eles: ele
        }
      }, {
        duration: 300
      })
      */
      if (ele.isNode() && this.props.onNodeClick) {
        this.props.onNodeClick(ele);
      }
      else if (ele.isEdge() && this.props.onEdgeClick) {
        this.props.onEdgeClick(ele);
      }
    });
    this.setState({cy});
  }
  render() {
    let cyStyle = {
      height: '1000px',
      width: '1000px',
      "text-align": 'left',
    };
    return (
        <div style={cyStyle} ref={(cyRef) => {if(cyRef !== null) this.cyRef = cyRef}}/>
    );
  }
}

export default Graph;
