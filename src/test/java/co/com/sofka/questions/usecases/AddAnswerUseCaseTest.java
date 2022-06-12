package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AddAnswerUseCaseTest {

    @SpyBean
    AddAnswerUseCase addAnswerUseCase;

    @MockBean
    AnswerRepository answerRepository;

    @MockBean
    GetUseCase getUseCase;

    @Test
    @DisplayName("Probando agregan respuesta")
    void agregarRespuestaTest(){
        var questionDTO = new QuestionDTO("01","Q-123","Que es un test","Abiera","Programacion","corro@correo.com");

        var answerDTO = new AnswerDTO("A01","01","Q-123","Algo nuevo",1,0);

        var answer = new Answer();
        answer.setId("A01");
        answer.setQuestionId("01");
        answer.setId("Q-123");
        answer.setAnswer("Algo nuevo");
        answer.setNumberOfVotes(1);
        answer.setPosition(0);

        Mockito.when(answerRepository.save(Mockito.any(Answer.class))).thenReturn(Mono.just(answer));
        Mockito.when(getUseCase.apply(Mockito.anyString())).thenReturn(Mono.just(questionDTO));

        var repuestaDTO = addAnswerUseCase.apply(answerDTO);
        var respuestaQuestionDTO = repuestaDTO.block();

        assert respuestaQuestionDTO != null;
        Assertions.assertEquals(respuestaQuestionDTO.getId(),questionDTO.getId());
        Assertions.assertEquals(respuestaQuestionDTO.getQuestion(),questionDTO.getQuestion());
    }


}