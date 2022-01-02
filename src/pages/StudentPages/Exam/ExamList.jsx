import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";
import ExamService from "../../../services/examService";

export default function ExamList() {
  const [exams, setExams] = useState([]);
  let cookie = new Cookies();
  let examService = new ExamService();

  const history = useHistory();

  let examResultService = new ExamResultService();

  useEffect(() => {
    examService
      .getExamsByStudent(cookie.get("studentId"))
      .then((result) => setExams(result.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Start Exam</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exams.map((exam) => (
            <Table.Row key={exam.examId}>
              <Table.Cell>{exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() =>
                    examResultService
                      .getByExamIdAndStudentId(
                        exam?.examId,
                        cookie.get("studentId")
                      )
                      .then((result) => {
                        if (
                          result.data.result < 100 ||
                          result.data.result > 0
                        ) {
                          alert(
                            "Zaten bu sınava ait sonucunuz var. Sınava tekrardan giremezsiniz. \nPuanınız : " +
                              result.data.result +
                              "\nTüm sonuçlarınızı sonuçlar sayfasından kontrol edebilirsiniz."
                          );
                        } else {
                          cookie.set("examId", exam.examId);
                          history.push("/exam_page");
                        }
                      })
                  }
                >
                  Start Exam
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
