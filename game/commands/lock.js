let action = {
  grammar: 'lock [subject]',
  alias: [],

  action (subject) {
    console.log(`lock ${subject}`)
  }
}

module.export = action
