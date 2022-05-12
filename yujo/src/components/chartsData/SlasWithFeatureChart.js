import React, {useEffect, useState} from "react";
import {apiGetSLAsByDateRange, apiGetSLAsWithFeatureBySLADateRange} from "../../API";
import {useTranslation} from "react-i18next";
import Chart from "../views/Chart";

const getData = async (feature, id, start, end) => {
    return await apiGetSLAsWithFeatureBySLADateRange(feature, id, start, end);
}

const onWeekPress = async (feature, id) => {
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

    const response = await getData(feature, id, start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data[feature + 's'][0].slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setDate(start.getDate() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {weekday: 'short'}),
                count: response.data[feature + 's'][0] ? response.data[feature + 's'][0].slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length : 0,
            });
        }

        return data;
    } else return [];
};

const onMonthPress = async (feature, id) => {
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

    const response = await getData(feature, id, start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data[feature + 's'][0].slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setDate(start.getDate() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {  day: '2-digit' }),
                count: response.data[feature + 's'][0] ? response.data[feature + 's'][0].slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length : 0,
            });
        }

        return data;
    } else return [];
};

const onYearPress = async (feature, id) => {
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

    const response = await getData(feature, id, start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data[feature + 's'][0].slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setMonth(start.getMonth() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {  month: 'short' }),
                count: response.data[feature + 's'][0] ? response.data[feature + 's'][0].slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length : 0,
            });
        }

        return data;
    } else return [];
};

const onYTDPress = async (feature, id) => {
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

    const response = await getData(feature, id, start, end);

    if (response.data) {
        const data = []

        //TODO Mock data just for test!
        const nMockData = Math.round(Math.random() * 100 + 1);
        const startMock = new Date(start.getTime());
        const endMock = new Date(end.getTime());
        endMock.setDate(endMock.getDate() + 1);
        for (let i = 0; i < nMockData; i++) {
            response.data[feature + 's'][0].slas.push({
                id: Math.round(Math.random() * 10000 + 1),
                creationDate: Math.round(Math.random() * (endMock.getTime() - startMock.getTime()) + startMock.getTime()),
            });
        }

        while (start.getTime() <= end.getTime()) {
            const stop = new Date(start.getTime());
            start.setMonth(start.getMonth() + 1);

            data.push({
                name: stop.toLocaleString('es-ES', {  month: 'short' }),
                count: response.data[feature + 's'][0] ? response.data[feature + 's'][0].slas.filter(sla => sla.creationDate >= stop.getTime() && sla.creationDate < start.getTime()).length : 0,
            });
        }

        return data;
    } else return [];
};

export default function SlasWithFeatureChart(props) {
    const {t} = useTranslation();
    const [data, setData] = useState([]);
    const [dataViewIndex, setDataViewIndex] = useState(0);

    useEffect(() => {
        const getData = async () => {
            switch (dataViewIndex) {
                case 0:
                    setData(await onWeekPress(props.feature, props.id));
                    break;

                case 1:
                    setData(await onMonthPress(props.feature, props.id));
                    break;

                case 2:
                    setData(await onYearPress(props.feature, props.id));
                    break;

                case 3:
                    setData(await onYTDPress(props.feature, props.id));
                    break;
            }
        };

        getData();
    }, [dataViewIndex]);

    return (
        <Chart
            title={props.title}
            chartType={1}
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
