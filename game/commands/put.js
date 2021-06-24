let action = {
  grammar: 'put [subject] [obj]',
  alias: ['place'],

  action (subject, obj) {
    console.log(`put ${subject} ${obj}`)
  }
}

module.export = action
