import ListComponent, { QuizList } from "..";

type Props = {
  quiz: QuizList[];
};

const SearchList = (props: Props) => {
  return (
    <>
      {props.quiz.map((quizObj: QuizList) => (
        <div key={quizObj.id}>
          <ListComponent quiz={quizObj} />
        </div>
      ))}
    </>
  );
};

export default SearchList;
