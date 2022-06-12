package co.com.sofka.questions.service;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import reactor.core.publisher.Mono;

@FunctionalInterface
public interface IServiceQuestion {
    public Mono<String> enviarCorreo(String correoDestino, String asunto, String cuerpo);
}
