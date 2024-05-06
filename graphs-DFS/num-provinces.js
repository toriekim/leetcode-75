/*

  547. Number of Provinces

  Tags: Medium, Depth-First Search, Breadth-First Search, Union Find, Graph

  There are `n` cities. Some of them are connected, while some are 
  not. If city `a` is connected directly with city `b`, and city 
  `b` is connected directly with city `c`, then city `a` is 
  connected indirectly with city `c`.

  A province is a group of directly or indirectly connected cities 
  and no other cities outside of the group.

  You are given an `n x n` matrix `isConnected` where 
  `isConnected[i][j] = 1` if the `i`th city and the `j`th city are 
  directly connected, and `isConnected[i][j] = 0` otherwise.

  Return the total number of provinces.

  
  Example 1:
    1--2    3
  Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
  Output: 2

  Example 2:
    1    2    3
  Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
  Output: 3


  Constraints:
  1 <= n <= 200
  n == isConnected.length
  n == isConnected[i].length
  isConnected[i][j] is 1 or 0.
  isConnected[i][i] == 1
  isConnected[i][j] == isConnected[j][i]
*/
/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// Approach: DFS graph traversal (similar to count islands)
// input matrix n x n -> n = number of cities
// output: number of provinces
// isConnected[i][j] = 1 if i and j are connected, 0 otherwise
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  // Keep track of visited cities
  const visited = new Set();
  let provinces = 0;

  // Helper function to traverse the graph
  const dfs = (city) => {
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited.has(neighbor)) {
        visited.add(neighbor);
        dfs(neighbor);
      }
    }
  };
  // Traverse the graph and count the number of provinces
  for (let city = 0; city < n; city++) {
    // If the city has not been visited, increment the number of provinces
    if (!visited.has(city)) {
      provinces++;
      dfs(city);
    }
  }

  return provinces;
};
