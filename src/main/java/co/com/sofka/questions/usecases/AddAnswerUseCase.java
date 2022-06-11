package co.com.sofka.questions.usecases;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.service.question.QuestioService;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class AddAnswerUseCase implements SaveAnswer {
    private final AnswerRepository answerRepository;
    private final MapperUtils mapperUtils;
    private final GetUseCase getUseCase;
    private final QuestioService serviceQuestion;
    public AddAnswerUseCase(MapperUtils mapperUtils, GetUseCase getUseCase, AnswerRepository answerRepository, QuestioService serviceQuestion) {
        this.answerRepository = answerRepository;
        this.getUseCase = getUseCase;
        this.mapperUtils = mapperUtils;
        this.serviceQuestion = serviceQuestion;
    }

    public Mono<QuestionDTO> apply(AnswerDTO answerDTO) {
        Objects.requireNonNull(answerDTO.getQuestionId(), "Id of the answer is required");
<<<<<<< HEAD
        return getUseCase.apply(answerDTO.getQuestionId()).flatMap(question ->
                answerRepository.save(mapperUtils.mapperToAnswer().apply(answerDTO))
                        .map(answer -> {
                            question.getAnswers().add(answerDTO);
                            serviceQuestion.enviarCorreo(question.getEmail(),"Han respondido tu pregunta","Algun usuario acaba de responder la siguiente pregunta: " + question.getQuestion());
=======
        return getUseCase.apply(answerDTO.getQuestionId()).flatMap(question -> {
                var answer = mapperUtils.mapperToAnswer().apply(answerDTO);
                return answerRepository.save(answer)
                        .map(i -> {
                            question.getAnswers().add(answerDTO);
                            //serviceQuestion.enviarCorreo(question.getEmail(),"Han respondido tu pregunta","Algun usuario acaba de responder la siguiente pregunta: "+"http://localhost:3000/question/"+question.getId());
>>>>>>> ebb1196cb9ef5dda7b88a97dce8596e127c9e7d2
                            return question;
                        })
        );
    }

}
