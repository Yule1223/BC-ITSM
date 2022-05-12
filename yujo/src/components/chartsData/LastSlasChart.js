import React, {useEffect, useState} from "react";
import {apiGetSLAsByDateRange} from "../../API";
import {useTranslation} from "react-i18next";
import Chart from "../views/Chart";

const getData = async (start, end) => {
    return await apiGetSLAsByDateRange(start, end);
}

const onWeekPress = async () => {
    let start = new Date();
    let end = new Date();
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);
    end.setMilliseconds(0);

    start.setDate(start.getDate() - start.getDay() + 1);
    end.setDate(end.getDate() - end.getDay() + 7);

    const response = await getData(start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data.slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setDate(start.getDate() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {weekday: 'short'}),
                count: response.data.slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length,
            });
        }

        return data;
    } else return [];
};

const onMonthPress = async () => {
    let start = new Date();
    let end = new Date();
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);
    end.setMilliseconds(0);

    start.setDate(1);
    end.setDate(1);
    end.setMonth(end.getMonth() + 1)

    const response = await getData(start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data.slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setDate(start.getDate() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {  day: '2-digit' }),
                count: response.data.slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length,
            });
        }

        return data;
    } else return [];
};

const onYearPress = async () => {
    let start = new Date();
    let end = new Date();
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);
    end.setMilliseconds(0);

    start.setFullYear(start.getFullYear() - 1);

    const response = await getData(start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data.slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        console.log(response.data.slas);
        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setMonth(start.getMonth() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {  month: 'short' }),
                count: response.data.slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length,
            });
        }

        return data;
    } else return [];
};

const onYTDPress = async () => {
    let start = new Date();
    let end = new Date();
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);
    end.setMilliseconds(0);

    start.setDate(1);
    start.setMonth(0);

    const response = await getData(start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data.slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setMonth(start.getMonth() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {  month: 'short' }),
                count: response.data.slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length,
            });
        }

        return data;
    } else return [];
};

export default function LastSlasChart() {
    const {t} = useTranslation();
    const [data, setData] = useState([]);
    const [dataViewIndex, setDataViewIndex] = useState(0);


    useEffect(() => {
        const getData = async () => {
            switch (dataViewIndex) {
                case 0:
                    setData(await onWeekPress());
                    break;

                case 1:
                    setData(await onMonthPress());
                    break;

                case 2:
                    setData(await onYearPress());
                    break;

                case 3:
                    setData(await onYTDPress());
                    break;
            }
        };

        getData();
    }, [dataViewIndex]);

    return (
        <Chart
            title={t('chart.lastSLAs')}
            chartType={0}
            data={data}
            xAxisDataKey={'name'}
            dataKey={'count'}
            onWeekPress={() => setDataViewIndex(0)}
            onMonthPress={() => setDataViewIndex(1)}
            onYearPress={() => setDataViewIndex(2)}
            onYTDPress={() => setDataViewIndex(3)}
        />
    );
}
