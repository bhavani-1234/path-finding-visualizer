import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as constants from "../../Constants";

export default class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const {
      clearBoard,
      handleChoice,
      visualizeAlgorithm,
      end_node_row,
      end_node_col,
    } = this.props;
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PATH FINDING VISUALIZER</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#pricing" onClick={() => clearBoard()}>
                Clear Board
              </Nav.Link>
          
              <NavDropdown title="Node Actions" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.11"
                  onClick={() => handleChoice(constants.ADD_MID)}
                >
                  Add Mid
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.12"
                  onClick={() => handleChoice(constants.DEL_MID)}
                >
                  Delete Mid
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.7"
                  onClick={() =>
                    visualizeAlgorithm(
                      0,
                      end_node_row,
                      end_node_col,
                      constants.DIJK
                    )
                  }
                > Dijkstra's
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.8"
                  onClick={() =>
                    visualizeAlgorithm(
                      0,
                      end_node_row,
                      end_node_col,
                      constants.DFS_NORM,
                      1
                    )
                  }
                > Depth First Search
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="#action/4.0"
                  onClick={() =>
                    visualizeAlgorithm(
                      0,
                      end_node_row,
                      end_node_col,
                      constants.BFS
                    )
                  }
                > Breadth First Search
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="#action/4.2"
                  onClick={() =>
                    visualizeAlgorithm(
                      0,
                      end_node_row,
                      end_node_col,
                      constants.ASTAR
                    )
                  }
                > A* Algorithm
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


