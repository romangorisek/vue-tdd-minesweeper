# Minesweeper game in vue.js (learning testing)

## Specs

- Dynamic mine board => width, height, num of mines can be set
  - 30 x 16 - 99
  - 16 x 16 - 40
  - 9 x 9 - 10
- Mines are randomly set on board
- Play options
  - left click - reveal the tile
    - bomb (lose)
    - number
    - empty tile - reveal all neighbor empty or number tiles
  - right click - toggle mine marker
    - if mine marker is checked, tile cant be revealed
  - left + right click - reveal all neighbor tiles
- End game:
  - only mine tiles are left - win
  - user left clicks on a tile with a mine - lose


