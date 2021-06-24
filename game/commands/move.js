let action = {
  grammar: 'move [direction]',
  alias: ['go'],

  action (direction) {
    console.log(`move ${direction}`)
  }
}

module.export = action
