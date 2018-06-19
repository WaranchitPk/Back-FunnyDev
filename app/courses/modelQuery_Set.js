export const faculty = (result) => {
    const resultFaculty = {
        ChiangRai: [
            {name: result[0].Name_Business_CR, value: result[0].SUM_Business_CR},
            {name: result[0].Name_Engineer_CR, value: result[0].SUM_Engineer_CR},
            {name: result[0].Name_General_CR, value: result[0].SUM_General_CR}
        ],
        Tak: [
            {name: result[0].Name_Business_Tak, value: result[0].SUM_Business_Tak},
            {name: result[0].Name_Scient_Tak, value: result[0].SUM_Scient_Tak},
            {name: result[0].Name_Engineer_Tak, value: result[0].SUM_Engineer_Tak},
            {name: result[0].Name_Art_Tak, value: result[0].SUM_Art_Tak},
            {name: result[0].Name_General_Tak, value: result[0].SUM_General_Tak},
        ],
        Nan: [
            {name: result[0].Name_Business_Nan, value: result[0].SUM_Business_Nan},
            {name: result[0].Name_Scient_Nan, value: result[0].SUM_Scient_Nan},
            {name: result[0].Name_Engineer_Nan, value: result[0].SUM_Engineer_Nan}
        ],
        PL: [
            {name: result[0].Name_Business_PL, value: result[0].SUM_Business_PL},
            {name: result[0].Name_Scient_PL, value: result[0].SUM_Scient_PL},
            {name: result[0].Name_Engineer_PL, value: result[0].SUM_Engineer_PL}
        ],
        ChiangMai: [
            {name: result[0].Name_Business_CM, value: result[0].SUM_Business_CM},
            {name: result[0].Name_Engineer_CM, value: result[0].SUM_Engineer_CM},
            {name: result[0].Name_Art_CM, value: result[0].SUM_Art_CM},
            {name: result[0].Name_Tech_CM, value: result[0].SUM_Tech_CM},
            {name: result[0].Name_Arit_CM, value: result[0].SUM_Arit_CM},
        ],
        LP: [
            {name: result[0].Name_Business_LP, value: result[0].SUM_Business_LP},
            {name: result[0].Name_Scient_LP, value: result[0].SUM_Scient_LP},
            {name: result[0].Name_Engineer_LP, value: result[0].SUM_Engineer_LP}
        ]
    };
    return resultFaculty
};

export const campus = (result) => {
    const resultData = [
        {name: result[0].Name2, value: result[0].Value2},
        {name: result[0].Name3, value: result[0].Value3},
        {name: result[0].Name4, value: result[0].Value4},
        {name: result[0].Name5, value: result[0].Value5},
        {name: result[0].Name6, value: result[0].Value6},
        {name: result[0].Name7, value: result[0].Value7}
    ];
    return resultData
};
