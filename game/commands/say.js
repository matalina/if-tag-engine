let action = {
  grammar: 'say [subject] [obj]',
  alias: ['talk'],

  action (subject, obj) {
    console.log(`drop ${subject} ${obj}`)
  }
}

module.export = action
