package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import static org.mockito.Mockito.*;
class GetUseCaseTest {
    GetUseCase getUseCase;
    QuestionRepository questionRepository;
    AnswerRepository answerRepository;
    MapperUtils mapperUtils;

    @BeforeEach
    public void setup() {
        mapperUtils = new MapperUtils();
        questionRepository = mock(QuestionRepository.class);
        answerRepository = mock(AnswerRepository.class);
        getUseCase = new GetUseCase(mapperUtils, questionRepository, answerRepository);
    }

    @Test
    @DisplayName("Test para obtener pregunta")
    void getQuestionSuccessTest() {
        var question = new Question();
        question.setId("Qgjhd2");
        question.setUserId("user1");
        question.setType("Astronomia");
        question.setCategory("Fisica");
        question.setQuestion("¿Que es luz?");

        var answer = new Answer();
        answer.setId("A234");
        answer.setUserId("user1");
        answer.setQuestionId("Qgjhd2");
        answer.setPosition(1);
        answer.setAnswer("es una particula que se comporta como onda");

        when(questionRepository.findById(question.getId())).thenReturn(Mono.just(question));
        when(answerRepository.findAllByQuestionId(question.getId())).thenReturn(Flux.just(answer));

        StepVerifier.create(getUseCase.apply(question.getId())).expectNextMatches(
                questionDTO1 -> {
                    assert questionDTO1.getId().equals("Qgjhd2");
                    assert questionDTO1.getUserId().equals("user1");
                    assert questionDTO1.getCategory().equals("Fisica");
                    assert questionDTO1.getQuestion().equals("¿Que es luz?");
                    assert questionDTO1.getType().equals("Astronomia");
                    return true;
                }
        ).verifyComplete();

        verify(questionRepository).findById(question.getId());
        verify(answerRepository).findAllByQuestionId(question.getId());
    }
}