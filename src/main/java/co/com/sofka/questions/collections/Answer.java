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
public class Answer {
    @Id
    private String id;
    private String userId;
    private String questionId;
    private String answer;
    private Integer position;
    private Integer numberOfVotes;



    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

  public Integer getNumberOfVotes() {
    return numberOfVotes;
  }

  public void setNumberOfVotes(Integer numberOfVotes) {
    this.numberOfVotes = numberOfVotes;
  }

  @Override
  public String toString() {
    return "Answer{" +
      "id='" + id + '\'' +
      ", userId='" + userId + '\'' +
      ", questionId='" + questionId + '\'' +
      ", answer='" + answer + '\'' +
      ", position=" + position +
      ", numberOfVotes=" + numberOfVotes +
      '}';
  }
}
