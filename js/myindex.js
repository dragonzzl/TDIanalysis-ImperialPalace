"use strict";

function cloudSwitch(s) {
    if (s.name == "1") {
        console.log(document.getElementById("chart_1").children[0].src);
        document.getElementById("charts_1").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[1].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[2].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_1").children[0].src = "pic/alldatacloud.png";
    }
    else if (s.name == "2") {
        console.log(document.getElementById("chart_1").children[0].src);
        document.getElementById("charts_1").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[1].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[2].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_1").children[0].src = "pic/positivedatacloud.png";
    }
    else {
        console.log(document.getElementById("chart_1").children[0].src);
        document.getElementById("charts_1").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[1].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[2].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_1").children[0].src = "pic/nalldatacloud.png";
    }
}



function wordconSwitch(s) {
    if (s.name == "1") {
        console.log(document.getElementById("chart_3").children[0].src);
        document.getElementById("charts_3").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[1].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[2].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_3").children[0].src = "pic/allyuyi.png";
    }
    else if (s.name == "2") {
        console.log(document.getElementById("chart_3").children[0].src);
        document.getElementById("charts_3").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[1].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[2].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_3").children[0].src = "pic/posyuyi.png";
    }
    else {
        console.log(document.getElementById("chart_3").children[0].src);
        document.getElementById("charts_3").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[1].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[2].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_3").children[0].src = "pic/negyuyi.png";
    }
}
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                interval: 0
            },
            data: ['故宫', '不错', '身份证', '讲解', '满意', '北京', '值得', '历史', '导游', '地方'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '词频',
            type: 'bar',
            barWidth: '60%',
            data: [11507, 3458, 3374, 3157, 2927, 2308, 2278, 2260, 2243, 2143]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

function wordfreSwitch(s) {
    console.log("wordfreSwitch函数执行了一次!");
    if (s.name == "1") {
        option.xAxis.data = ['故宫', '不错', '身份证', '讲解', '满意', '北京', '值得', '历史', '导游', '地方'];
        option.series.data = [11507, 3458, 3374, 3157, 2927, 2308, 2278, 2260, 2243, 2143];
        refreshData(option.xAxis.data, option.series.data);
    }
    else if (s.name == "2") {

        option.xAxis.data = ['故宫', '不错', '讲解', '值得', '身份证', '导游', '历史', '地方', '北京', '排队'];
        option.series.data = [8412, 3012, 2524, 2157, 1943, 1818, 1732, 1592, 1527, 1256];
        refreshData(option.xAxis.data, option.series.data);
    }
    else {
        option.xAxis.data = ['故宫', '身份证', '排队', '北京', '地方', '讲解', '感觉', '不错', '时间', '历史'];
        option.series.data = [1345, 344, 341, 295, 286, 245, 209, 208, 206, 202];
        refreshData(option.xAxis.data, option.series.data);
    }
    // console.log(option);

    // dom = document.getElementById("container");
    // myChart = echarts.init(dom);
    // myChart.setOption(option,true);
    document.getElementById("charts_2").getElementsByTagName("a")[0].className = "navi-link";
    document.getElementById("charts_2").getElementsByTagName("a")[1].className = "navi-link";
    document.getElementById("charts_2").getElementsByTagName("a")[2].className = "navi-link";
    s.className = "navi-link active";
}
function refreshData(a, b) {
    //刷新数据
    var option = myChart.getOption();
    option.xAxis.data = a;
    option.series.data = b;
    myChart.setOption({
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    interval: 0
                },
                data: a,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        series: [
            {
                name: '词频',
                type: 'bar',
                barWidth: '60%',
                data: b
            }]
    });
}
