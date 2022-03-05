export const constantsValues = {
    hourlyPeriodicity: 0,
    dailyPeriodicity: 1,
    weeklyPeriodicity: 2,
    monthlyPeriodicity: 3,
    quarterlyPeriodicity: 4,
    semesterPeriodicity: 5,
    yearlyPeriodicity: 6,

    cryptoBilling: 0,
    bankTransferBilling: 1,
    cardBilling: 2,
};

export const slinkConfig = {
    serviceSpaces: [
        {
            name: 'Mañana',
            startTime: '9h',
            endTime: '14h',
            price: 900,
            pricePeriodicity: constantsValues.monthlyPeriodicity,
        },
        {
            name: 'Tarde',
            startTime: '15h',
            endTime: '20h',
            price: 900,
            pricePeriodicity: constantsValues.monthlyPeriodicity,
        },
        {
            name: 'Todo el día',
            startTime: '9h',
            endTime: '20h',
            price: 1800,
            pricePeriodicity: constantsValues.monthlyPeriodicity,
        }
    ],
    services: [
        {
            name: 'Gestión de incidencias',
            description: 'La notable gestión de incidencias ofertada por nuestro experimentado grupo',
            price: 1000,
            pricePeriodicity: constantsValues.monthlyPeriodicity,
        },
        {
            name: 'Gestión de infraestructura TI',
            description: 'Disfruta de la mejor infraestructura TI del sector',
            price: 2000,
            pricePeriodicity: constantsValues.monthlyPeriodicity,
        }
    ],
    extraServices: [
        {
            name: 'Apoyo fin de semana / festivos',
            description: 'Mantente activo los días de descanso',
            price: 400,
            pricePeriodicity: constantsValues.dailyPeriodicity,
        },
        {
            name: 'Soporte presencial',
            description: 'Solventa las emergencias de la manera más rápida y mejor posible',
            price: 200,
            pricePeriodicity: constantsValues.hourlyPeriodicity,
        }
    ],
    licences: [
        'Cliente',
        'Proveedor de servicios (sin costes para el cliente)',
        'Proveedor de servicios (cargos para el cliente después)'
    ],
    serviceLeves: [
        'Niveles de servicio ofertados por la empresa:\nBlablabla...\nBlablabla...\nBlablabla...\nBlablabla...'
    ],
    revisionReports: [
        {
            name: 'Mensual',
            price: 500,
            pricePeriodicity: constantsValues.monthlyPeriodicity,
        },
        {
            name: 'Trimestral',
            price: 450,
            pricePeriodicity: constantsValues.quarterlyPeriodicity,
        },
        {
            name: 'Semestral',
            price: 400,
            pricePeriodicity: constantsValues.semesterPeriodicity,
        },
        {
            name: 'Anual',
            price: 350,
            pricePeriodicity: constantsValues.yearlyPeriodicity,
        }
    ],
    billings: [
        {
            name: 'Mensual',
            periodicity: constantsValues.monthlyPeriodicity,
        },
        {
            name: 'Trimestral',
            periodicity: constantsValues.quarterlyPeriodicity
        },
        {
            name: 'Semestral',
            periodicity: constantsValues.semesterPeriodicity
        },
        {
            name: 'Anual',
            periodicity: constantsValues.yearlyPeriodicity
        }
    ],
    billingMethods: [constantsValues.cryptoBilling, constantsValues.bankTransferBilling, constantsValues.cardBilling]
};
