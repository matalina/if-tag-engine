let action = {
  grammar: 'unlock [subject]',
  alias: [],

  action (subject) {
    console.log(`unlock ${subject}`)
  }
}

module.export = action
