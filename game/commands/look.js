let action = {
  grammar: 'look [subject]',
  alias: [],

  action (subject) {
    console.log(`look ${subject}`)
  }
}

module.export = action
