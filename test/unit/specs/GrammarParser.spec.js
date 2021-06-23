import GrammarParser from '@/services/GrammarParser.js'

describe('Initializing Grammar Parser', () => {
  
})

describe('GrammarParser', () => {
  beforeEach(() => {
    GrammarParser.init()
  })

  it('parse method should start with a valid verb', () => {
    expect(() => {
      GrammarParser.parse('throw the ball')
    }).toThrow('Invalid Verb')

    expect(GrammarParser.parse('go north')).toBeTruthy()
  })

  it('short verb subject sentences should be parsed correctly', () => {
    let command = GrammarParser.parse('go north')
    expect(command).toHaveProperty('verb', 'go')
    expect(command).toHaveProperty('subject', 'north')
  })

  it('short verb article subject sentences should be parsed correctly', () => {
    let command = GrammarParser.parse('take the ball')
    expect(command).toHaveProperty('verb', 'take')
    expect(command).toHaveProperty('subject', 'ball')
  })

  it('full sentences should identify prepositions correctly', () => {
    let command = GrammarParser.parse('put the sword in the bag')
    expect(command).toHaveProperty('verb', 'put')
    expect(command).toHaveProperty('subject', 'sword')
    expect(command).toHaveProperty('object', 'bag')
  })

  it('incorrect nouns identified correctly', () => {

    let command = GrammarParser.parse('take hand')
    expect(command).toHaveProperty('verb', 'take')
    expect(command).toHaveProperty('subject', null)
  })
})
