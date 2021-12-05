import numpy

puzzle_input = []

with open("day5.txt", "r") as input_file:
    for line in input_file.readlines():
        pair = line.replace("\n", "").split(" -> ")
        output_pair = []
        for elem in pair:
            s = elem.split(",")
            f = [int(s[0]), int(s[1])]
            output_pair.append(f)
        puzzle_input.append(output_pair)

filtered = []
diagonal = []
for pair in puzzle_input:
    if pair[0][0] == pair[1][0] or pair[0][1] == pair[1][1]:
        filtered.append(pair)
    else:
        diagonal.append(pair)

matrix = numpy.empty((1000, 1000), dtype=int)
matrix.fill(0)

print(len(filtered))
print(filtered)
print(len(diagonal))
print(diagonal)

for pair in filtered:
    if pair[0][0] == pair[1][0]:
        for i in range(min(pair[0][1], pair[1][1]), max(pair[0][1], pair[1][1]) + 1):
            matrix[i][pair[0][0]] += 1
    if pair[0][1] == pair[1][1]:
        for i in range(min(pair[0][0], pair[1][0]), max(pair[0][0], pair[1][0]) + 1):
            matrix[pair[0][1]][i] += 1

for pair in diagonal:
    delta_x = 1 if pair[1][0] - pair[0][0] > 0 else -1
    delta_y = 1 if pair[1][1] - pair[0][1] > 0 else -1
    for i, j in zip(range(pair[0][0], pair[1][0] + delta_x, delta_x), range(pair[0][1], pair[1][1] + delta_y, delta_y)):
        matrix[j][i] += 1

print(matrix)
unique, counts = numpy.unique(matrix, return_counts=True)
print(dict(zip(unique, counts)))
