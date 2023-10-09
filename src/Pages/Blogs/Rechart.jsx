import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';

const data = [
  {
    name: 'First',
    uv: 4000,
    pv:1,
    amt: 2400,
  },
  {
    name: 'Second',
    uv: 3000,
    pv: 5,
    amt: 2210,
  },
  {
    name: 'Third',
    uv: 2000,
    pv: 4,
    amt: 2290,
  },
  {
    name: 'Fourth',
    uv: 2780,
    pv: 4,
    amt: 2000,
  },
  {
    name: 'Fifth',
    uv: 1890,
    pv: 5,
    amt: 2181,
  },
  {
    name: 'Sixth',
    uv: 2390,
    pv: 6,
    amt: 2500,
  },
  {
    name: 'Seven',
    uv: 3490,
    pv: 7,
    amt: 2100,
  },
];




const Rechart = () => {
    return (
        <div width="100%" height="100%">
          <BarChart
            width={700}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </div>
      );
};

export default Rechart;