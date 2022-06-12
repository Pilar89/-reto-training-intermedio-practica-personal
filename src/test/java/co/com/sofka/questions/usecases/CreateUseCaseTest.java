package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.service.question.QuestioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;


import static org.mockito.Mockito.*;

class CreateUseCaseTest {

    CreateUseCase createUseCase;
    QuestionRepository questionRepository;

    @BeforeEach
    public void setup() {
        MapperUtils mapperUtils = new MapperUtils();
        questionRepository = mock(QuestionRepository.class);
        createUseCase = new CreateUseCase(mapperUtils, questionRepository);
    }


    @Test
    void createQuestionSuccessUseCaseTest() {
        var questionDTO = new QuestionDTO("ADD1234", "User1",
                "¿que se hace?", "¿general?", "prueba", "pepitoperez@gmail.com");
        var question = new Question();
        question.setId("ADD1234");
        question.setUserId("User1");
        question.setType("¿general?");
        question.setCategory("prueba");
        question.setQuestion("¿que se hace?");

        when(questionRepository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));
        StepVerifier.create(createUseCase.apply(questionDTO)).expectNextMatches(
                id -> {
                    assert id.equals(questionDTO.getId());
                    return true;
                }).verifyComplete();
        verify(questionRepository).save(Mockito.any(Question.class));
    }
}