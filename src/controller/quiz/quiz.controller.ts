import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as QUIZ_ALGERIE from '../../data/quizAlgerie.json';
import * as QUIZ_LIST from '../../data/quizList.json';
import * as QUIZ_REACT from '../../data/quizReact.json';

@Controller('quiz')
export class QuizController {
  @Get('/algerie')
  getQuizAlgerie(@Res() res: Response): any {
    return res.status(HttpStatus.OK).json(QUIZ_ALGERIE);
  }

  @Get('/react')
  getQuizReact(@Res() res: Response): any {
    return res.status(HttpStatus.OK).json(QUIZ_REACT);
  }

  @Get('/list')
  getQuizList(@Res() res: Response): any {
    return res.status(HttpStatus.OK).json(QUIZ_LIST);
  }
}
