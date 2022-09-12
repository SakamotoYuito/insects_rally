import Layout from "pages/layout";
import ListComponent from "components/List";
import { QuizList } from "components/List";

const Search = () => {
  const quiz: QuizList[] = [
    { id: 1, title: "水生昆虫", place: "rv" },
    { id: 2, title: "山の昆虫", place: "mt" },
    { id: 3, title: "のはらの昆虫", place: "gd" },
  ];
  return (
    <Layout>
      <h1>クイズ一覧</h1>
      <ListComponent quiz={quiz} />
    </Layout>
  );
};

export default Search;
