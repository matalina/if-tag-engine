let action = {
  grammar: 'open [subject]',
  alias: [],

  action (subject) {
    console.log(`open ${subject}`)
  }
}

module.export = action
