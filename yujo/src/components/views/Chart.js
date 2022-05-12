import { useTranslation } from "react-i18next";
import '../styles/Chart.style.css';
import {PieChart, Pie, BarChart, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar} from 'recharts';
import {useState} from "react";

function Chart(props) {
    const [topButtonSelected, setTopButtonSelected] = useState(0);
    const {t} = useTranslation();

    const renderChart = () => {
        switch (props.chartType) {
            case 0:
                return (
                    <AreaChart
                        data={props.data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={props.xAxisDataKey} />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey={props.dataKey} stroke="#000000" fill="#6fe5d4" />
                    </AreaChart>
                );

            case 1:
                return (
                    <BarChart
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={props.xAxisDataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={props.dataKey} stroke="#000000" fill="#6fe5d4" />
                    </BarChart>
                );

            case 2:

                const renderLabel = (renderProps) => {
                    return props.data[renderProps.index].name + ' (' + props.data[renderProps.index].count + ')';
                };

                return (
                    <PieChart>
                        <Pie
                            dataKey={props.dataKey}
                            data={props.data}
                            label
                            labelLine={false}
                            innerRadius={'20%'}
                            outerRadius={'75%'}
                            fill="#6fe5d4"
                        />
                        <Tooltip />
                    </PieChart>
                );
        }
    };

    return (
        <div id='generalContainer'>
            <div id='infoContainer'>
                <h5>{props.title}</h5>
            </div>
            <div id='dataContainer'>
                <div id='chartContainer'>
                    <ResponsiveContainer width="95%" height="90%">
                        {renderChart()}
                    </ResponsiveContainer>
                </div>
                <div id='buttonsContainer'>
                    <div
                        className={'leftButton button' + (topButtonSelected === 0 ? ' buttonSelected': '')}
                        onClick={() => {
                            setTopButtonSelected(0);
                            props.onWeekPress();
                        }}
                    >
                        {t('chart.last7Days')}
                    </div>
                    <div
                        className={'button' + (topButtonSelected === 1 ? ' buttonSelected': '')}
                        onClick={() => {
                            setTopButtonSelected(1);
                            props.onMonthPress();
                        }}
                    >
                        {t('chart.last1Month')}
                    </div>
                    <div
                        className={'button' + (topButtonSelected === 2 ? ' buttonSelected': '')}
                        onClick={() => {
                            setTopButtonSelected(2);
                            props.onYearPress();
                        }}
                    >
                        {t('chart.last1Year')}
                    </div>
                    <div
                        className={'rightButton button' + (topButtonSelected === 3 ? ' buttonSelected': '')}
                        onClick={() => {
                            setTopButtonSelected(3);
                            props.onYTDPress();
                        }}
                    >
                        {t('chart.lastYTD')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart;
