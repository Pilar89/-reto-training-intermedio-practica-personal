package co.com.sofka.questions.collections;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document
public class Question {
    @Id
    private String id;
    private String userId;
    private String question;
    private String type;
    private String category;
    private String email;
}
