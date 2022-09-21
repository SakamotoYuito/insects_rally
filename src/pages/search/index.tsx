import Layout from "pages/layout";
import SearchList from "components/List/SearchList";
import { QuizList } from "components/List";

const Search = () => {
  const quiz: QuizList[] = [
    {
      id: 1,
      title: "水辺の昆虫",
      message: "川に住む昆虫についての問題です",
      place: "rv",
    },
    {
      id: 2,
      title: "森の昆虫",
      message: "山に住む昆虫についての問題です",
      place: "mt",
    },
    {
      id: 3,
      title: "野原の昆虫",
      message: "野に住む昆虫についての問題です",
      place: "gd",
    },
  ];
  return (
    <Layout>
      <h1>クイズ一覧</h1>
      <SearchList quiz={quiz} />
    </Layout>
  );
};

export default Search;
