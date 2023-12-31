import PropTypes from 'prop-types';
import { Cell, Pie, PieChart } from 'recharts';

function PieChartCard({ data: userData }) {
  const { projectName, price, fromDate, toDate } = userData;
  console.log(userData, price)
    const data = [
      { name: 'Done', value: Math.floor(Math.random() * 100) },
      { name: 'Pending', value: Math.floor(Math.random() * 100) },
    ];
    const COLORS = ['#0088FE', '#FF8042', '#00C49F', '#FFBB28'];
  
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
  return (
    <div className="flex flex-col items-center gap-4  rounded-3xl bg-gray-100 p-6">
              <div className="text-center">
              <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-3 ">{ projectName}</h1>
              <p className="text-xs sm:text-sm text-gray-500 font-bold">Duration: {fromDate} <span className="text-black"> To</span> { toDate}</p>
              <p className=" text-sm text-gray-500 font-bold">Price: { price }</p>
              </div>

              <div className="h-40">
              
                <PieChart width={400} height={260}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="30%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </div>

              <div>
                <div>
                  <span className="bg-[#0088FE] w-3 h-3 inline-block"></span> <span>Done</span>
                </div>
                <div>
                  <span className="bg-[#FF8042] w-3 h-3 inline-block"></span> <span>Pending</span>
                </div>
              </div>
              
          </div>
  )
}

PieChartCard.propTypes = {
    data: PropTypes.object,
}

export default PieChartCard
