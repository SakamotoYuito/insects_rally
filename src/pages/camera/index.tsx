import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const camera = () => {
  const handleError = () => {};

  const handleScan = () => {};
  const [data, setData] = useState("No result");
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default camera;
