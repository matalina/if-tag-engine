let game = [
  'inventory', 'map', 'character'
]
let shortcuts = [
  'i', 'm', 'c', // command shortcuts
  'n', 'e', 'w', 's', 'ne', 'nw', 'se', 'sw', 'u', 'd' // movement shortcuts
]

let verbs = [
  ...game,
  ...shortcuts,
  'go', 'move',
  'look',
  'put', 'place',
  'drop',
  'take', 'get',
  'open',
  'close',
  'lock',
  'unlock',
  'talk', 'say'
]

module.exports = verbs
