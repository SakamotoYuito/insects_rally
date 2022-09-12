import { useState } from "react";
import Layout from "pages/layout";

const camera = () => {
  const handleError = () => {};

  const handleScan = () => {};
  const [data, setData] = useState("No result");
  return (
    <Layout>
      <h1>QRコードリーダー</h1>
    </Layout>
  );
};

export default camera;
