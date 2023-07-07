import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import exp from 'constants'
import { AnswerRepository } from '../repositories/answer-repository'

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer) => { 
    return;
  }
}

test('create an answer', async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestionUseCase.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')

})