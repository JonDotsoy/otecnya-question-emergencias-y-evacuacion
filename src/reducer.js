
const {loadQuestions} = require('./util/lodasSamples')
const RUT = require('rut.js')
const initialStateQuest = {
  currentQuestion: 0,
  questions: loadQuestions(),
  responses: [],
  finishQuestionary: false,
}

module.exports.quest = function (state = initialStateQuest, action) {
  switch (action.type) {
    case 'reset_all': {
      return {
        ...initialStateQuest,
        questions: loadQuestions(),
      }
    }
    case 'save_response_saving': {
      return {
        ...state,
        saving: true,
        saved: false,
      }
    }
    case 'save_response_saved': {
      return {
        ...state,
        saving: false,
        saved: true,
      }
    }
    case 'response_question': {
      if (state.currentQuestion + 1 >= state.questions.length) {
        return {
          ...state,
          finishQuestionary: true,
          currentQuestion: undefined,
          responses: [
            ...state.responses,
            {
              question: state.questions[state.currentQuestion],
              response: action.response
            }
          ]
        }
      } else {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          responses: [
            ...state.responses,
            {
              question: state.questions[state.currentQuestion],
              response: action.response
            }
          ]
        }
      }
    }
    default: return state
  }
}

const initialStateSession = {
  id: undefined,
  id_format: undefined,
  tmp_rut: undefined,
  tmp_rut_valid: false
}

module.exports.session = function (state = initialStateSession, action) {
  switch (action.type) {
    case 'reset_all': {
      return {
        ...initialStateSession,
      }
    }
    case 'memory_rut': {
      return {
        ...state,
        tmp_rut: action.tmp_rut,
        tmp_rut_valid: RUT.validate(RUT.clean(action.tmp_rut))
      }
    }
    case 'sessin_login': {
      return {
        ...state,
        id: RUT.clean(action.rut),
        id_format: RUT.format(RUT.clean(action.rut))
      }
    }
    default: return state
  }
}