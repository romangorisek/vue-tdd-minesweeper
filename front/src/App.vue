<template>
  <div id="app">
    <h1>Minesweeper with Vue.js and Cypress test</h1>
    <div data-cy="settings">
      <v-select
        :items="difficultyOptions"
        v-model="selectedDifficulty"
        item-text="name"
        item-value="id"
        label="Difficulty"
        solo
      ></v-select>
    </div>
    <Minesweeper data-cy="game" />
  </div>
</template>

<script>
import Minesweeper from '@/components/Minesweeper'

export default {
  name: 'App',
  components: {
    Minesweeper,
  },
  data () {
    return {
      selectedDifficulty: 3,
      difficultyOptions: [
        {
          id: 1,
          width: 9,
          height: 9,
          mines: 10,
          name: 'Easy',
        },
        {
          id: 2,
          width: 16,
          height: 16,
          mines: 40,
          name: 'Meddium',
        },
        {
          id: 3,
          width: 30,
          height: 16,
          mines: 99,
          name: 'Hard',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
