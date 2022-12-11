const rawData1 = `[T]             [P]     [J]        
[F]     [S]     [T]     [R]     [B]
[V]     [M] [H] [S]     [F]     [R]
[Z]     [P] [Q] [B]     [S] [W] [P]
[C]     [Q] [R] [D] [Z] [N] [H] [Q]
[W] [B] [T] [F] [L] [T] [M] [F] [T]
[S] [R] [Z] [V] [G] [R] [Q] [N] [Z]
[Q] [Q] [B] [D] [J] [W] [H] [R] [J]
 1   2   3   4   5   6   7   8   9 `;

const rawData2 = `move 3 from 8 to 2
move 3 from 1 to 5
move 3 from 1 to 4
move 2 from 7 to 4
move 3 from 7 to 4
move 8 from 5 to 7
move 2 from 1 to 8
move 7 from 3 to 2
move 1 from 5 to 2
move 1 from 6 to 7
move 2 from 5 to 9
move 1 from 9 to 1
move 3 from 9 to 6
move 5 from 6 to 2
move 10 from 7 to 2
move 3 from 8 to 9
move 7 from 9 to 2
move 1 from 1 to 2
move 1 from 9 to 6
move 1 from 4 to 1
move 1 from 8 to 2
move 11 from 4 to 2
move 1 from 7 to 9
move 1 from 4 to 6
move 1 from 9 to 7
move 1 from 1 to 3
move 1 from 7 to 5
move 1 from 4 to 9
move 1 from 5 to 2
move 1 from 3 to 8
move 1 from 6 to 9
move 1 from 8 to 6
move 11 from 2 to 1
move 1 from 6 to 8
move 7 from 2 to 1
move 14 from 2 to 7
move 1 from 6 to 3
move 1 from 8 to 2
move 1 from 3 to 9
move 7 from 7 to 1
move 1 from 6 to 5
move 5 from 7 to 6
move 4 from 2 to 8
move 3 from 6 to 7
move 3 from 7 to 8
move 9 from 1 to 3
move 8 from 3 to 7
move 1 from 3 to 1
move 2 from 2 to 3
move 1 from 6 to 7
move 2 from 1 to 7
move 7 from 1 to 6
move 1 from 3 to 5
move 2 from 5 to 3
move 7 from 6 to 3
move 9 from 7 to 5
move 1 from 9 to 1
move 4 from 8 to 5
move 7 from 1 to 5
move 4 from 7 to 2
move 1 from 7 to 8
move 1 from 6 to 4
move 10 from 5 to 3
move 8 from 5 to 1
move 2 from 8 to 3
move 2 from 8 to 9
move 8 from 2 to 7
move 4 from 9 to 8
move 13 from 3 to 7
move 1 from 5 to 3
move 6 from 3 to 9
move 10 from 1 to 9
move 1 from 3 to 4
move 6 from 9 to 7
move 1 from 5 to 8
move 14 from 7 to 6
move 14 from 6 to 1
move 13 from 1 to 8
move 1 from 1 to 2
move 9 from 8 to 9
move 6 from 8 to 5
move 2 from 4 to 6
move 1 from 8 to 1
move 2 from 2 to 1
move 2 from 8 to 6
move 3 from 1 to 2
move 3 from 3 to 9
move 16 from 9 to 1
move 3 from 2 to 4
move 3 from 7 to 2
move 6 from 5 to 4
move 5 from 7 to 3
move 4 from 6 to 1
move 10 from 2 to 9
move 13 from 9 to 1
move 5 from 7 to 2
move 2 from 4 to 6
move 1 from 9 to 1
move 2 from 9 to 5
move 2 from 6 to 8
move 2 from 5 to 3
move 1 from 8 to 3
move 31 from 1 to 7
move 2 from 1 to 5
move 12 from 7 to 3
move 11 from 3 to 2
move 1 from 8 to 4
move 6 from 4 to 5
move 1 from 3 to 4
move 8 from 3 to 2
move 5 from 5 to 6
move 2 from 6 to 7
move 4 from 7 to 3
move 1 from 6 to 9
move 13 from 7 to 6
move 13 from 2 to 3
move 1 from 4 to 8
move 10 from 2 to 3
move 3 from 7 to 3
move 2 from 2 to 1
move 1 from 8 to 2
move 2 from 4 to 7
move 1 from 9 to 2
move 3 from 7 to 3
move 1 from 5 to 1
move 2 from 5 to 2
move 15 from 6 to 7
move 4 from 1 to 9
move 22 from 3 to 9
move 7 from 3 to 9
move 4 from 3 to 8
move 4 from 9 to 4
move 3 from 2 to 4
move 5 from 7 to 1
move 7 from 4 to 7
move 2 from 8 to 4
move 1 from 4 to 8
move 3 from 1 to 5
move 2 from 1 to 4
move 1 from 2 to 9
move 2 from 5 to 7
move 1 from 5 to 9
move 3 from 8 to 6
move 8 from 7 to 1
move 6 from 7 to 1
move 10 from 1 to 9
move 3 from 6 to 2
move 2 from 1 to 3
move 2 from 3 to 6
move 3 from 7 to 4
move 2 from 7 to 1
move 1 from 2 to 5
move 13 from 9 to 5
move 12 from 9 to 3
move 6 from 5 to 3
move 2 from 9 to 1
move 11 from 9 to 3
move 1 from 4 to 6
move 2 from 5 to 3
move 1 from 1 to 8
move 24 from 3 to 5
move 2 from 9 to 3
move 2 from 2 to 4
move 1 from 9 to 2
move 2 from 6 to 8
move 5 from 3 to 5
move 2 from 8 to 9
move 1 from 9 to 8
move 4 from 1 to 4
move 1 from 9 to 4
move 1 from 8 to 4
move 1 from 8 to 4
move 7 from 4 to 5
move 1 from 1 to 8
move 1 from 6 to 5
move 35 from 5 to 4
move 18 from 4 to 3
move 6 from 4 to 3
move 8 from 5 to 8
move 8 from 8 to 1
move 2 from 4 to 9
move 23 from 3 to 1
move 1 from 8 to 5
move 1 from 9 to 1
move 1 from 5 to 1
move 1 from 9 to 4
move 11 from 1 to 2
move 16 from 4 to 5
move 3 from 3 to 5
move 9 from 2 to 5
move 1 from 4 to 1
move 2 from 2 to 6
move 1 from 2 to 9
move 1 from 6 to 2
move 1 from 3 to 5
move 1 from 3 to 9
move 1 from 2 to 9
move 23 from 1 to 5
move 1 from 6 to 9
move 1 from 9 to 8
move 27 from 5 to 1
move 1 from 9 to 3
move 18 from 5 to 8
move 6 from 5 to 7
move 1 from 5 to 6
move 1 from 9 to 8
move 12 from 8 to 3
move 1 from 1 to 4
move 6 from 7 to 8
move 1 from 6 to 3
move 1 from 4 to 2
move 2 from 1 to 8
move 1 from 2 to 9
move 8 from 3 to 2
move 2 from 9 to 7
move 5 from 2 to 7
move 7 from 7 to 2
move 2 from 8 to 2
move 3 from 1 to 9
move 5 from 1 to 2
move 3 from 9 to 8
move 3 from 8 to 7
move 5 from 2 to 5
move 2 from 7 to 6
move 12 from 8 to 9
move 12 from 1 to 4
move 9 from 9 to 3
move 4 from 5 to 8
move 12 from 3 to 8
move 1 from 7 to 9
move 3 from 9 to 2
move 1 from 4 to 7
move 3 from 1 to 7
move 7 from 4 to 6
move 3 from 6 to 2
move 2 from 7 to 9
move 18 from 8 to 1
move 2 from 4 to 7
move 1 from 2 to 8
move 1 from 8 to 2
move 10 from 2 to 3
move 3 from 9 to 8
move 2 from 6 to 7
move 13 from 3 to 1
move 2 from 8 to 9
move 28 from 1 to 8
move 1 from 5 to 2
move 1 from 4 to 3
move 4 from 7 to 6
move 5 from 6 to 7
move 7 from 2 to 6
move 1 from 9 to 6
move 2 from 2 to 4
move 1 from 9 to 1
move 4 from 1 to 2
move 3 from 2 to 5
move 3 from 4 to 9
move 3 from 5 to 7
move 1 from 1 to 4
move 6 from 7 to 6
move 1 from 2 to 6
move 1 from 4 to 1
move 1 from 1 to 8
move 3 from 9 to 4
move 18 from 6 to 3
move 4 from 3 to 6
move 1 from 7 to 9
move 1 from 6 to 9
move 2 from 3 to 6
move 1 from 9 to 6
move 1 from 9 to 2
move 6 from 6 to 8
move 3 from 4 to 7
move 2 from 7 to 2
move 35 from 8 to 7
move 3 from 3 to 1
move 26 from 7 to 2
move 10 from 3 to 9
move 6 from 9 to 4
move 3 from 1 to 2
move 1 from 4 to 3
move 4 from 4 to 1
move 1 from 3 to 6
move 1 from 8 to 3
move 1 from 6 to 2
move 1 from 3 to 2
move 13 from 7 to 3
move 3 from 1 to 4
move 4 from 3 to 1
move 3 from 1 to 9
move 2 from 1 to 9
move 10 from 2 to 9
move 19 from 2 to 9
move 6 from 3 to 9
move 2 from 3 to 4
move 2 from 2 to 6
move 17 from 9 to 8
move 1 from 2 to 8
move 2 from 9 to 3
move 2 from 6 to 7
move 8 from 9 to 3
move 5 from 4 to 5
move 14 from 9 to 4
move 1 from 2 to 3
move 1 from 7 to 2
move 2 from 9 to 3
move 1 from 2 to 7
move 5 from 5 to 1
move 1 from 2 to 1
move 1 from 3 to 1
move 1 from 9 to 7
move 3 from 7 to 2
move 3 from 3 to 7
move 1 from 2 to 4
move 1 from 3 to 8
move 1 from 2 to 4
move 4 from 3 to 4
move 16 from 8 to 9
move 3 from 1 to 4
move 21 from 4 to 6
move 1 from 7 to 2
move 1 from 8 to 2
move 1 from 1 to 3
move 6 from 6 to 7
move 3 from 1 to 9
move 3 from 7 to 3
move 1 from 4 to 6
move 1 from 4 to 7
move 2 from 2 to 6
move 1 from 8 to 6
move 13 from 6 to 7
move 1 from 2 to 3
move 15 from 9 to 8
move 6 from 6 to 3
move 13 from 8 to 3
move 4 from 9 to 4
move 5 from 4 to 8
move 19 from 3 to 9
move 3 from 3 to 1
move 5 from 8 to 9
move 17 from 9 to 7
move 1 from 1 to 8
move 4 from 9 to 6
move 3 from 3 to 8
move 1 from 1 to 2
move 3 from 3 to 1
move 36 from 7 to 6
move 1 from 1 to 2
move 7 from 8 to 2
move 24 from 6 to 5
move 2 from 6 to 7
move 1 from 3 to 2
move 4 from 6 to 8
move 19 from 5 to 1
move 8 from 6 to 4
move 7 from 2 to 5
move 3 from 2 to 8
move 15 from 1 to 6
move 2 from 9 to 5
move 2 from 7 to 8
move 3 from 4 to 1
move 4 from 5 to 6
move 1 from 9 to 7
move 1 from 8 to 3
move 3 from 6 to 1
move 2 from 4 to 7
move 13 from 1 to 8
move 1 from 3 to 7
move 1 from 4 to 5
move 19 from 8 to 6
move 1 from 7 to 3
move 8 from 5 to 8
move 1 from 6 to 8
move 3 from 5 to 9
move 1 from 6 to 4
move 3 from 4 to 7
move 1 from 3 to 9
move 4 from 7 to 9
move 20 from 6 to 3
move 1 from 8 to 4
move 2 from 9 to 4
move 2 from 9 to 2
move 2 from 9 to 3
move 13 from 6 to 9
move 9 from 9 to 8
move 2 from 6 to 3
move 8 from 8 to 2
move 2 from 7 to 3
move 5 from 9 to 3
move 12 from 3 to 5
move 1 from 4 to 7
move 8 from 2 to 4
move 8 from 4 to 7
move 2 from 2 to 6
move 2 from 8 to 9
move 2 from 6 to 8
move 2 from 9 to 6
move 2 from 6 to 9
move 2 from 4 to 8
move 2 from 9 to 2
move 6 from 3 to 1
move 2 from 2 to 9
move 3 from 9 to 3
move 8 from 7 to 2
move 6 from 1 to 2
move 8 from 3 to 8
move 1 from 7 to 3
move 5 from 3 to 8
move 6 from 2 to 7
move 3 from 7 to 6
move 2 from 7 to 9
move 1 from 7 to 8
move 8 from 5 to 7
move 7 from 2 to 1
move 7 from 1 to 6
move 7 from 7 to 9
move 1 from 7 to 6
move 2 from 3 to 9
move 2 from 8 to 5
move 25 from 8 to 5
move 5 from 5 to 1
move 1 from 6 to 4
move 17 from 5 to 4
move 5 from 5 to 4
move 23 from 4 to 7
move 2 from 5 to 2
move 4 from 6 to 3
move 6 from 3 to 7
move 1 from 5 to 2
move 1 from 1 to 7
move 2 from 2 to 8
move 2 from 2 to 9
move 1 from 5 to 7
move 4 from 1 to 6
move 2 from 8 to 3
move 2 from 9 to 4
move 1 from 4 to 8
move 7 from 9 to 1
move 2 from 3 to 5
move 28 from 7 to 4
move 4 from 6 to 2
move 2 from 6 to 2
move 3 from 7 to 4
move 2 from 5 to 6
move 4 from 2 to 6
move 9 from 6 to 5
move 4 from 1 to 7
move 1 from 6 to 2
move 3 from 2 to 3
move 1 from 8 to 6
move 1 from 7 to 4
move 2 from 3 to 4
move 1 from 7 to 4
move 2 from 1 to 6
move 1 from 7 to 9
move 1 from 7 to 9
move 1 from 6 to 2
move 7 from 5 to 8
move 1 from 3 to 9
move 1 from 5 to 2
move 7 from 8 to 7
move 4 from 4 to 8
move 2 from 8 to 4
move 2 from 2 to 7
move 1 from 1 to 7
move 1 from 5 to 6
move 32 from 4 to 7
move 2 from 6 to 5
move 2 from 8 to 2
move 1 from 2 to 1
move 2 from 5 to 4
move 1 from 2 to 5
move 1 from 1 to 4
move 4 from 4 to 3
move 1 from 6 to 4
move 1 from 5 to 4
move 5 from 9 to 1
move 4 from 3 to 5
move 3 from 1 to 6
move 2 from 9 to 5
move 2 from 1 to 3
move 15 from 7 to 1
move 5 from 5 to 3
move 1 from 5 to 2
move 3 from 4 to 5
move 2 from 5 to 9
move 3 from 3 to 6
move 3 from 3 to 4
move 1 from 3 to 8
move 1 from 9 to 3
move 2 from 4 to 9
move 1 from 5 to 3
move 2 from 9 to 6
move 1 from 8 to 1
move 1 from 3 to 2
move 1 from 4 to 9
move 2 from 9 to 3
move 9 from 1 to 3
move 5 from 3 to 4
move 2 from 1 to 3
move 4 from 1 to 5
move 1 from 2 to 8
move 3 from 4 to 9`;

const rawData3 = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `;
const rawData4 = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

let initialStack = rawData1.split("\n");
initialStack.pop();
initialStack = initialStack.reverse();

const rows = 9;
const magazine = [];

for (let i = 0; i < rows; i++) {
  magazine.push([]);
}

initialStack.forEach((val) => {
  for (let i = 0; i < rows; i++) {
    const position = 4 * i + 1;
    if (val.charAt(position) != " ") {
      magazine[i].push(val.charAt(position));
    }
  }
});

const moves = rawData2
  .split("\n")
  .map((elem) => elem.replace("move ", "").split(/\D+/g));

//part1
// moves.forEach(move => {
//     [numberOfCrates, from, to] = move;
//     for (let i = 1; i <= numberOfCrates; i++) {
//         const pickedUpCrate = magazine[from - 1].pop()
//         magazine[to - 1].push(pickedUpCrate);
//     }
// })

//part2
moves.forEach((move) => {
  [numberOfCrates, from, to] = move;
  const pickedUpCrates = [];
  for (let i = 1; i <= numberOfCrates; i++) {
    pickedUpCrates.unshift(magazine[from - 1].pop());
  }
  for (let i = 1; i <= numberOfCrates; i++) {
    magazine[to - 1].push(pickedUpCrates.shift());
  }
});

let result = "";

magazine.forEach((stack) => {
  result += stack.pop();
});

console.log(result);
