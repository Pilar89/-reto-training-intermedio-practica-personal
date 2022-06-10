package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.service.question.QuestioServicio;
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
    private final QuestioServicio serviceQuestion;
    public AddAnswerUseCase(MapperUtils mapperUtils, GetUseCase getUseCase, AnswerRepository answerRepository, QuestioServicio serviceQuestion) {
        this.answerRepository = answerRepository;
        this.getUseCase = getUseCase;
        this.mapperUtils = mapperUtils;
        this.serviceQuestion = serviceQuestion;
    }

    public Mono<QuestionDTO> apply(AnswerDTO answerDTO) {
        System.out.println(answerDTO);
        Objects.requireNonNull(answerDTO.getQuestionId(), "Id of the answer is required");
        return getUseCase.apply(answerDTO.getQuestionId()).flatMap(question -> {
                var answer = mapperUtils.mapperToAnswer().apply(answerDTO);
                System.out.println(answer);
                return answerRepository.save(answer)
                        .map(i -> {
                            question.getAnswers().add(answerDTO);
                            serviceQuestion.enviarCorreo(question.getEmail(),"Han respondido tu pregunta","Algun usuario acaba de responder la siguiente pregunta: "+"http://localhost:3000/question/"+question.getId());
                            return question;
                        });
            }
        );
    }
}
