import InvalidGrammarException from './src/exceptions/InvalidGrammarException'
import GrammarParser from './src/services/GrammarParser'

GrammarParser.init()

try {
  console.log(GrammarParser.parse('inventory'))
  console.log(GrammarParser.parse('go north'))
  console.log(GrammarParser.parse('take sword'))
  console.log(GrammarParser.parse('take the sword'))
  console.log(GrammarParser.parse('take sword'))
  console.log(GrammarParser.parse('put the sword in the bag'))
  console.log(GrammarParser.parse('put sword bag'))
  console.log(GrammarParser.parse('drop the sword'))
} catch (e) {
  console.log(e.message)
}
