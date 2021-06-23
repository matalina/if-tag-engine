import {partials} from 'handlebars'
import InvalidGrammarException from '../exceptions/InvalidGrammarException.js'

let verbs = []
let nouns = []

function getVerb (sentence) {
  let parts = sentence.split(' ')

  if (!verbs.includes(parts[0])) {
    throw new InvalidGrammarException(`Invalid Verb \`\`\`${parts[0]}\`\`\``)
  }

  return parts[0]
}

function getSubject (sentence) {
  let parts = sentence.split(' ')

  for (let i in parts) {
    let word = parts[i]

    if (nouns.includes(word)) {
      return word
    }
  }

  return null
}

function getObject (sentence) {
  let parts = sentence.split(' ')
  let count = 0

  for (let i in parts) {
    if (nouns.includes(parts[i])) {
      count++

      if (count === 2) {
        return parts[i]
      }
    }
  }

  return null
}

export default {
  init () {
    verbs = ['go', 'take', 'put', 'inventory', 'drop']
    nouns = ['north', 'east', 'south', 'west', 'ball', 'sword', 'bag']
  },
  parse (sentence) {
    let command = {
      verb: null,
      subject: null,
      object: null
    }

    command.verb = getVerb(sentence)
    command.subject = getSubject(sentence)
    command.object = getObject(sentence)

    return command
  }
}
