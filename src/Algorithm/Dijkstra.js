export function dijkstras(grid, start_node, end_node) {
  const visitedNodesInOrder = [];
  const unvisitedNodes = getAllNodes(grid);
  start_node.distance = 0;

  while (unvisitedNodes.length !== 0) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    closestNode.isVisited = true;
    if (closestNode.isWall) continue;
    // If the closest node is at a distance of infinity,
    // We must be trapped and should therefore stop.
    if (closestNode.distance === 1000000000) return visitedNodesInOrder;
    visitedNodesInOrder.push(closestNode);

    if (closestNode === end_node) return visitedNodesInOrder;

    updateNeighbors(closestNode, grid);
  }
  return visitedNodesInOrder;
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => {
    return nodeA.distance - nodeB.distance;
  });
}

function updateNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const nodes of unvisitedNeighbors) {
    nodes.distance = node.distance + 1;
    nodes.previousNode = node;          
  }
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { row, col } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter((node) => !node.isVisited);
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
