"use strict";

function cloudSwitch(s) {
    if (s.name == "1") {
        console.log(document.getElementById("chart_1").children[0].src);
        document.getElementById("charts_1").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[1].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_1").children[0].src = "pic/alldatacloud.png";
    }
    else {
        console.log(document.getElementById("chart_1").children[0].src);
        document.getElementById("charts_1").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_1").getElementsByTagName("a")[1].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_1").children[0].src = "pic/nalldatacloud.png";
    }
}



function wordconSwitch(s) {
    if (s.name == "1") {
        console.log(document.getElementById("chart_3").children[0].src);
        document.getElementById("charts_3").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[1].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_3").children[0].src = "pic/allyuyi.png";
    }
    else {
        console.log(document.getElementById("chart_3").children[0].src);
        document.getElementById("charts_3").getElementsByTagName("a")[0].className = "navi-link";
        document.getElementById("charts_3").getElementsByTagName("a")[1].className = "navi-link";
        s.className = "navi-link active";
        document.getElementById("chart_3").children[0].src = "pic/nallyuyi.png";
    }
}
var dom = document.getElementById("container_bar");
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
    var a;
    var b;
    if (s.name == "1") {
        a = ['故宫', '不错', '身份证', '讲解', '满意', '北京', '值得', '历史', '导游', '地方'];
        b = [11507, 3458, 3374, 3157, 2927, 2308, 2278, 2260, 2243, 2143];
    }
    else {
        a= ['故宫', '地方', '中国', '历史', '宫殿', '北京', '建筑', '参观', '紫禁城', '钟表馆'];
        b= [98, 33, 30, 30, 29, 29, 27, 23, 22, 16];
    }
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
            }
        ]
    });
    document.getElementById("charts_2").getElementsByTagName("a")[0].className = "navi-link";
    document.getElementById("charts_2").getElementsByTagName("a")[1].className = "navi-link";
    s.className = "navi-link active";
}