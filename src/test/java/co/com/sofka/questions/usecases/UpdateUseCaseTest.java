package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;


import static org.mockito.Mockito.*;

class UpdateUseCaseTest {

    UpdateUseCase updateUseCase;
    QuestionRepository questionRepository;

    @BeforeEach
    public void setup() {
        MapperUtils mapperUtils = new MapperUtils();
        questionRepository = mock(QuestionRepository.class);
        updateUseCase = new UpdateUseCase(mapperUtils,questionRepository);
    }



    @Test
    @DisplayName("Test para actualizar una pregunta")
    void updateQuestionSuccessUseCaseTest(){
        var questionDTO = new QuestionDTO("Q1234","User1", "¿que es la luz?", "Astronomia", "Fisica", "astronomia@correo.com");
        var question = new Question();
        question.setId("Q1234");
        question.setUserId("User1");
        question.setType("Astronomia");
        question.setCategory("Fisica");
        question.setQuestion("¿que es la luz?");

        when(questionRepository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));
        StepVerifier.create(updateUseCase.apply(questionDTO)).expectNextMatches(
                id ->{
                    assert id.equals(questionDTO.getId());
                    return true;
                }).verifyComplete();
        verify(questionRepository).save(Mockito.any(Question.class));
    }

}