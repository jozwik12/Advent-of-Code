import numpy

lines = open("day4.txt", "r").readlines()

bingo = [int(x) for x in lines[0].split(",")]

boards = []

for i in range(2, 598, 6):
    board = []
    boards.append(board)
    for j in range(0, 5):
        _ = lines[i + j].split()
        _ = [int(s) for s in _]
        board.append(list(_))

for board in boards:
    board = numpy.array(board)

def checkWinner():
    for b in range(len(bingo)):
        winning_number = bingo[b]
        for w in range(len(boards)):
            for i in range(5):
                for j in range(5):
                    if boards[w][i][j] == winning_number:
                        boards[w][i][j] = 0
            if 0 in numpy.sum(boards[w], axis=0):
                return winning_number, numpy.sum(boards[w])
            if 0 in numpy.sum(boards[w], axis=1):
                return winning_number, numpy.sum(boards[w])

def checkLoser():
    boards_that_won = set()
    for b in range(len(bingo)):
        winning_number = bingo[b]
        for w in range(len(boards)):
            for i in range(5):
                for j in range(5):
                    if boards[w][i][j] == winning_number:
                        boards[w][i][j] = 0
            if 0 in numpy.sum(boards[w], axis=0):
                boards_that_won.add(w)
                if len(boards_that_won)==100:
                    return winning_number, numpy.sum(boards[w])
            if 0 in numpy.sum(boards[w], axis=1):
                boards_that_won.add(w)
                if len(boards_that_won) == 100:
                    return winning_number, numpy.sum(boards[w])

# print(checkWinner())
print(checkLoser())
