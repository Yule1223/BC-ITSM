import React, {useEffect, useState} from "react";
import {apiGetFeaturesBySLADateRange, apiGetSLAsByDateRange, apiGetSLAsWithFeatureBySLADateRange} from "../../API";
import {useTranslation} from "react-i18next";
import Chart from "../views/Chart";

const getData = async (feature, start, end) => {
    return await apiGetFeaturesBySLADateRange(feature, start, end);
}

const onWeekPress = async (feature) => {
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

    const response = await getData(feature, start, end);

    if (response.data) {
        const data = []

        response.data[feature + 's'].forEach(featureValue => {
            data.push({name: featureValue.name, count: featureValue.slas.length});
        });

        //TODO Mock data just for test!
        data.map(par => par.count = Math.round(Math.random() * 10 + 1));

        return data;
    } else return [];
};

const onMonthPress = async (feature) => {
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

    const response = await getData(feature, start, end);

    if (response.data) {
        const data = []

        response.data[feature + 's'].forEach(featureValue => {
            data.push({name: featureValue.name, count: featureValue.slas.length});
        });

        //TODO Mock data just for test!
        data.map(par => par.count = Math.round(Math.random() * 10 + 1));

        return data;
    } else return [];
};

const onYearPress = async (feature) => {
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

    const response = await getData(feature, start, end);

    if (response.data) {
        const data = []

        response.data[feature + 's'].forEach(featureValue => {
            data.push({name: featureValue.name, count: featureValue.slas.length});
        });

        //TODO Mock data just for test!
        data.map(par => par.count = Math.round(Math.random() * 10 + 1));

        return data;
    } else return [];
};

const onYTDPress = async (feature) => {
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

    const response = await getData(feature, start, end);

    if (response.data) {
        const data = []

        response.data[feature + 's'].forEach(featureValue => {
            data.push({name: featureValue.name, count: featureValue.slas.length});
        });

        //TODO Mock data just for test!
        data.map(par => par.count = Math.round(Math.random() * 10 + 1));

        return data;
    } else return [];
};

export default function DistributionFeatureChart(props) {
    const {t} = useTranslation();
    const [data, setData] = useState([]);
    const [dataViewIndex, setDataViewIndex] = useState(0);

    useEffect(() => {
        const getData = async () => {
            switch (dataViewIndex) {
                case 0:
                    setData(await onWeekPress(props.feature));
                    break;

                case 1:
                    setData(await onMonthPress(props.feature));
                    break;

                case 2:
                    setData(await onYearPress(props.feature));
                    break;

                case 3:
                    setData(await onYTDPress(props.feature));
                    break;
            }
        };

        getData();
    }, [dataViewIndex]);

    return (
        <Chart
            title={props.title}
            chartType={2}
            data={data}
            dataKey={'count'}
            onWeekPress={() => setDataViewIndex(0)}
            onMonthPress={() => setDataViewIndex(1)}
            onYearPress={() => setDataViewIndex(2)}
            onYTDPress={() => setDataViewIndex(3)}
        />
    );
}
