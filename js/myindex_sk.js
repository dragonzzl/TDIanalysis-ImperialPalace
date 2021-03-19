"use strict";
var dom = document.getElementById("container_sk");
var myChart = echarts.init(dom);
var app = {};
var option = null;
myChart.showLoading();

$.get('js/china.json', function (geoJson) {

    myChart.hideLoading();
    echarts.registerMap('china', geoJson);
    myChart.setOption(option = {
        title: {
            text: '全国各地游客对故宫情感倾向 （2021）',
            subtext: '数据来自旅游网站文本'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c}%'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
                //color:['#e16f56','#EB190A']
            }
        },
        series: [
            {
                name: '故宫情感态度',
                type: 'map',
                mapType: 'china', // 自定义扩展图表类型
                label: {
                    show: true
                },
                data: [
                    { name: '北京', value: 90.54 },
                    { name: '天津', value: 89.39 },
                    { name: '上海', value: 94.34 },
                    { name: '重庆', value: 88.46 },
                    { name: '河北', value: 90 },
                    { name: '山西', value: 85.71 },
                    { name: '辽宁', value: 95.74 },
                    { name: '吉林', value: 90.32 },
                    { name: '黑龙江', value: 94.29 },
                    { name: '江苏', value: 83.81 },
                    { name: '浙江', value: 90.00 },
                    { name: '安徽', value: 94.12 },
                    { name: '福建', value: 76.00 },
                    { name: '江西', value: 95.00 },
                    { name: '山东', value: 89.91 },
                    { name: '河南', value: 62.50 },
                    { name: '湖北', value: 88.33 },
                    { name: '湖南', value: 93.10 },
                    { name: '广东', value: 93.70 },
                    { name: '海南', value: 72.193 },
                    { name: '四川', value: 84.31 },
                    { name: '贵州', value: 50.193 },
                    { name: '云南', value: 92.86 },
                    { name: '陕西', value: 93.33 },
                    { name: '甘肃', value: 80.006 },
                    //{name: '青海', value: 0},
                    { name: '台湾', value: 82.61 },
                    { name: '内蒙古', value: 100 },
                    { name: '广西', value: 100 },
                    //{name: '西藏', value: 0},
                    { name: '宁夏', value: 100 },
                    { name: '新疆', value: 100 },
                    { name: '香港', value: 89.13 },
                    { name: '澳门', value: 75 },
                    //{name: '南海诸岛', value: 0}
                ],
                // 自定义名称映射
                nameMap: {

                }
            }
        ]
    });
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var domline = document.getElementById("container_line");
var myChartline = echarts.init(domline);
var appline = {};

var optionline;



optionline = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // xAxis: [
    //     {
    //         type: 'category',
    //         axisLabel:{
    //             interval:0
    //         },
    //         data: ['故宫', '不错', '身份证', '讲解', '满意', '北京', '值得','历史','导游','地方'],
    //         axisTick: {
    //             alignWithLabel: true
    //         }
    //     }
    // ],
    // yAxis: [
    //     {
    //         type: 'value'
    //     }
    // ],
    // series: [
    //     {
    //         name: '词频',
    //         type: 'bar',
    //         barWidth: '60%',
    //         data: [11507, 3458, 3374, 3157, 2927, 2308, 2278,2260,2243,2143]
    //     }
    // ],

    xAxis: {
        type: 'category',
        data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        axisLabel: {
            interval: 0
        },
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value',
        min: 0.5,
        max: 1.0
    },
    series: [{
        data: [0.9723, 0.9052, 0.7816, 0.7113, 0.7372, 0.7123, 0.7603, 0.7816, 0.6839, 0.6688, 0.7936, 0.8415],
        type: 'line'
    }]
};

if (optionline && typeof optionline === 'object') {
    myChartline.setOption(optionline);
}

function cloudSwitch(s) {
    console.log(document.getElementById("chart_1").children[0].src);
    for(var i=0;i<12;i=i+1)
    {
        document.getElementById("charts_1").getElementsByTagName("a")[i].className = "navi-link";
    }
    s.className = "navi-link active";
    document.getElementById("chart_1").children[0].src = "pic/w"+s.children[0].innerText+".png";

}
