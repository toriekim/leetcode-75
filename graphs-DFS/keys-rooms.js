/*
  841. Keys and Rooms

  Tags: Medium, Depth-First Search, Breadth-First Search, Graph

  There are `n` rooms labeled from `0` to `n - 1` and all the 
  rooms are locked except for room `0`. Your goal is to visit 
  all the rooms. However, you cannot enter a locked room 
  without having its key.

  When you visit a room, you may find a set of distinct keys 
  in it. Each key has a number on it, denoting which room it 
  unlocks, and you can take all of them with you to unlock 
  the other rooms.

  Given an array `rooms` where `rooms[i]` is the set of keys 
  that you can obtain if you visited room `i`, return `true` 
  if you can visit all the rooms, or `false` otherwise.

  
  Example 1:
  Input: rooms = [[1],[2],[3],[]]
  Output: true
  Explanation: 
  We visit room 0 and pick up key 1.
  We then visit room 1 and pick up key 2.
  We then visit room 2 and pick up key 3.
  We then visit room 3.
  Since we were able to visit every room, we return true.
  
  Example 2:
  Input: rooms = [[1,3],[3,0,1],[2],[0]]
  Output: false
  Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
  

  Constraints:
  - `n == rooms.length`
  - `2 <= n <= 1000`
  - `0 <= rooms[i].length <= 1000`
  - `1 <= sum(rooms[i].length) <= 3000`
  - `0 <= rooms[i][j] < n`
  - All the values of `rooms[i]` are unique.
 */

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
  // Create set to keep track of rooms visited
  const visited = new Set();

  // BREADTH-FIRST SEARCH -------------------
  // const queue = [...rooms[0]];
  // visited.add(0);
  // while (queue.length > 0) {
  //   const room = queue.pop();
  //   visited.add(room);

  //   for (let key of rooms[room]) {
  //     if (!visited.has(key)) {
  //       visited.add(key);
  //       queue.push(key);
  //     }
  //   }
  // }

  // DEPTH-FIRST SEARCH -------------------
  const dfs = (room) => {
    if (visited.has(room)) return;
    visited.add(room);
    for (const key of rooms[room]) {
      dfs(key);
    }
  };
  dfs(0);
  return visited.size === rooms.length;
};

// Using the Set as both queue and collection
// const canVisitAllRooms = (rooms) => {
//   // Create a Set to keep track of both visited rooms and keys
//   const visited = new Set([0]);
//   // Then can iterate through visited rooms...
//   for (const room of visited) {
//     // while adding the keys in that room to the set
//     for (const key of rooms[room]) {
//       visited.add(key);
//     }
//   }
//   // If the size of visited is equal to # of rooms, can visit all rooms
//   return visited.size === rooms.length;
// };

// ----------------------------------------------------------------
// let rooms = [[1], [2], [3], []];
// console.log(canVisitAllRooms(rooms)); // true
// rooms = [[1, 3], [3, 0, 1], [2], [0]];
// console.log(canVisitAllRooms(rooms)); // false
// rooms = [[2], [], [1]];
// console.log(canVisitAllRooms(rooms)); // true
