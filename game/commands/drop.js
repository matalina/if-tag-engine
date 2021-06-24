let action = {
  grammar: 'drop [subject]',
  alias: [],

  action (subject) {
    console.log(`drop ${subject}`)
  }
}

module.export = action
