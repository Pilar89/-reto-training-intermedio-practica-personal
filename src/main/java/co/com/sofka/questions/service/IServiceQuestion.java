package co.com.sofka.questions.service;

import reactor.core.publisher.Mono;

@FunctionalInterface
public interface IServiceQuestion {
    public Mono<String> enviarCorreo(String correoDestino, String asunto, String cuerpo);
}
