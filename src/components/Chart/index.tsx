import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const RadarChartComponent = () => {
  const data = [
    {
      subject: "やま",
      A: 87,
      fullMark: 2,
    },
    {
      subject: "かわ",
      A: 35,
      fullMark: 2,
    },
    {
      subject: "のはら",
      A: 90,
      fullMark: 2,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart
        title="図鑑完成度"
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="図鑑完成度"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;