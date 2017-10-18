import {setEntries, next, vote} from '../src/core'

describe('логика приложения', () => {
  describe('set entries', () => {
    
    it('добавляет записи в state', () => {
      const state = {}
      const entries = ['1', '2', '3']
      const newState = setEntries(state, entries)
      expect(newState).toEqual({
        entries: ['1', '2', '3']
      })
    })
  })
  
  describe('next', () => {
    
    it('берет пару записей для голосования', () => {
    const state = {
      entries: ['1', '2', '3']
    }
    const newState = next(state)
      expect(newState).toEqual({
        entries: ['3'],
        vote: {
          pair: ['1', '2'],
          tally: {
            1: 0,
            2: 0
          }
        }
      })
    })
    
    it('удаляет проигравшую запись и добавляет победителя в конец списка, берет следующую пару', () => {
      const state = {
        entries: ['3', '4', '5'],
        vote: {
          pair: ['1', '2'],
          tally: {
            1: 3,
            2: 2
          }
        }
      }
      const newState = next(state)
      expect(newState).toEqual({
        entries: ['5', '1'],
        vote: {
          pair: ['3', '4'],
          tally: {
            3: 0,
            4: 0
          }
        }
      })
    })
    
    it('когда осталась одна запись, она объявляется победителем', () => {
      const state = {
        entries: [],
        vote: {
          pair: ['3', '4'],
          tally: {
            3: 3,
            4: 2
          }
        }
      }
      const newState = next(state)
      expect(newState).toEqual({
        winner: '3'
      })
    })
  })
  
  describe('vote', () => {
    
    it('добавляет голос', () => {
      const state = {
        entries: ['3'],
        vote: {
          pair: ['1', '2'],
          tally: {
            1: 0,
            2: 0
          }
        }
      }
      const newState = vote(state, '1')
      expect(newState).toEqual({
        entries: ['3'],
        vote: {
          pair: ['1', '2'],
          tally: {
            1: 1,
            2: 0
          }
        }
      })
    })
  })
})