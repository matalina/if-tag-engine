let action = {
  grammar: 'close [subject]',
  alias: [],

  action (subject) {
    console.log(`close ${subject}`)
  }
}

module.export = action
