package co.com.sofka.questions.usecases;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class DeleteUseCaseTest {

    @SpyBean
    private DeleteUseCase deleteUseCase;

    @MockBean
    private QuestionRepository questionRepository;

    @Test
    @DisplayName("test para probar eliminar pregunta")
    void deleteQuestionSucessTest(){
        var questionDTO = new QuestionDTO();
        questionDTO.setId("ADfg1");
        questionDTO.setUserId("use1");
        questionDTO.setType("Astronomia");
        questionDTO.setCategory("Fisica");
        questionDTO.setQuestion("¿Que es la luz?");
        Mockito.when( questionRepository.deleteById("ADfg1")).thenReturn(Mono.empty());

        var result = deleteUseCase.apply("ADfg1").block();
        assertNull(result);
    }
}