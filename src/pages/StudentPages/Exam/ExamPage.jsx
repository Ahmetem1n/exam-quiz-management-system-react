import moment from "moment";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import Countdown from "react-countdown";
import { useHistory } from "react-router-dom";
import { Form, Table } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";
import QuestionService from "../../../services/questionService";
import QuestionStudentService from "../../../services/questionStudentService";

export default function ExamPage() {
  const [questions, setQuestions] = useState([]);

  let history = useHistory();
  var cookie = new Cookies();
  let examId = cookie.get("examId");

  let questionStudentService = new QuestionStudentService();
  let examResultService = new ExamResultService();
  var studentId = cookie.get("studentId");
  var questionId = 0;
  var markedOption = "F";
  useEffect(() => {
    let questionsService = new QuestionService();
    questionsService
      .getByExamId(examId)
      .then((result) => setQuestions(result.data));
  }, []);

  function Completionist() {
    for (i = 0; i < questions.length; i++) {
      questionId = questions[i].questionId;
      if (cookie.get("question" + questionId) !== "") {
        markedOption = cookie.get("question" + questionId);
      } else {
        markedOption = "F";
      }
      questionStudentService.addQuestionStudent({
        questionId,
        studentId,
        markedOption,
      });
    }

    examResultService.createResult(
      cookie.get("examId"),
      cookie.get("studentId")
    );
    cookie.set("examId", "");
    history.push("/");
    window.location.reload();
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  let i = 1;

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row></Table.Row>
        </Table.Header>

        <Table.Body>
          {questions.map(
            (question) => (
              cookie.set("question" + question.questionId, ""),
              (
                <Table.Body key={question.questionId}>
                  <Table>
                    <Table.Row>
                      <h3>
                        {i++}) {question?.questionText}
                      </h3>
                    </Table.Row>

                    <Table.Row>
                      <Form.Group>
                        <Form.Radio
                          label={"A) " + question?.optionA}
                          name={question.questionId}
                          value={cookie.get("question" + question.questionId)}
                          onChange={() =>
                            cookie.set("question" + question.questionId, "A")
                          }
                        />
                        <Form.Radio
                          label={"B) " + question?.optionB}
                          name={question.questionId}
                          value={cookie.get("question" + question.questionId)}
                          onChange={(e) =>
                            cookie.set("question" + question.questionId, "B")
                          }
                        />
                        <Form.Radio
                          label={"C) " + question?.optionC}
                          name={question.questionId}
                          value={cookie.get("question" + question.questionId)}
                          onChange={(e) =>
                            cookie.set("question" + question.questionId, "C")
                          }
                        />
                        <Form.Radio
                          label={"D) " + question?.optionD}
                          name={question.questionId}
                          value={cookie.get("question" + question.questionId)}
                          onChange={(e) =>
                            cookie.set("question" + question.questionId, "D")
                          }
                        />
                        <Form.Radio
                          label={"E) " + question?.optionE}
                          name={question.questionId}
                          value={cookie.get("question" + question.questionId)}
                          onChange={(e) =>
                            cookie.set("question" + question.questionId, "E")
                          }
                        />
                      </Form.Group>
                    </Table.Row>
                  </Table>
                  <Table></Table>
                </Table.Body>
              )
            )
          )}
        </Table.Body>
        <Table>
          <Table.HeaderCell>
            <Form.Button
              onClick={() => {
                for (i = 0; i < questions.length; i++) {
                  questionId = questions[i].questionId;
                  if (cookie.get("question" + questionId) === "") {
                    cookie.set("question" + questionId, "F");
                  }
                  markedOption = cookie.get("question" + questionId);
                  questionStudentService.addQuestionStudent({
                    questionId,
                    studentId,
                    markedOption,
                  });
                }
                examResultService.createResult(
                  cookie.get("examId"),
                  cookie.get("studentId")
                );
                alert(
                  "Cevaplar Kaydedildi.\nSüreniz bitene kadar cevaplarınızı değiştirip tekrardan kaydedebilirsiniz."
                );
              }}
            >
              Submit
            </Form.Button>

            <Form.Button
              onClick={() => {
                for (i = 0; i < questions.length; i++) {
                  questionId = questions[i].questionId;
                  if (cookie.get("question" + questionId) !== "") {
                    markedOption = cookie.get("question" + questionId);
                  } else {
                    markedOption = "F";
                  }
                  questionStudentService.addQuestionStudent({
                    questionId,
                    studentId,
                    markedOption,
                  });
                }

                examResultService.createResult(
                  cookie.get("examId"),
                  cookie.get("studentId")
                );
                cookie.set("examId", "");
                alert("Cevaplar Kaydedildi.Sınavınız bitti.");
                history.push("/");
                window.location.reload();
              }}
            >
              Finish
            </Form.Button>
          </Table.HeaderCell>
        </Table>
        <Countdown date={moment().add(5, "m")} renderer={renderer} />
      </Table>
    </div>
  );
}
