package co.com.sofka.questions;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
<<<<<<< HEAD
=======
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
>>>>>>> ebb1196cb9ef5dda7b88a97dce8596e127c9e7d2
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

@OpenAPIDefinition(info = @Info(title = "Swagger questions", version = "1.0", description = "Documentation questionsAPIs v1.0"))

public class QuestionsApplication {


    public static void main(String[] args) {
        SpringApplication.run(QuestionsApplication.class, args);
    }


}
