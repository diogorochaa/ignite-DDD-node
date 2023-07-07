import { Answer } from "../entities/answer";
import { AnswerRepository } from "../repositories/answer-repository";

interface AnswerQuestionUseCaseRequest {
  questionId: string;
  instructorId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswerRepository) { }

  async execute({ questionId, instructorId, content }: AnswerQuestionUseCaseRequest) {
    const asnwer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    });

    await this.answerRepository.create(asnwer);

    return asnwer;
  }
}