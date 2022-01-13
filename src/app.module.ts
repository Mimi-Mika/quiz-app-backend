import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { QuizController } from './controller/quiz/quiz.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController, QuizController],
  providers: [AppService],
})
export class AppModule {}
