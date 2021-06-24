let action = {
  grammar: 'get [subject]',
  alias: ['put'],

  action (subject) {
    console.log(`get ${subject}`)
  }
}

module.export = action
