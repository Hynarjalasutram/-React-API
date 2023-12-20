import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Graph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        name: 'Jan',
        uv: 7500,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Feb',
        uv: 7000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Mar',
        uv: 9000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Apr',
        uv: 8000,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'May',
        uv: 8250,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Jun',
        uv: 6500,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Jul',
        uv: 8250,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Aug',
        uv: 15250,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Sep',
        uv: 9050,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Oct',
        uv: 8000,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Nov',
        uv: 7850,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Dec',
        uv: 7950,
        pv: 4300,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div  style={{ width: '100%',height:'auto'}}>
        <h2>Overview</h2>
        <p>Monthly Earning</p>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <>
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
                <h6>{activeIndex.name}</h6>
                </>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
      </div>
    );
  }
}
