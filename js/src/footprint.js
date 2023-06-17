var myChart = echarts.init(document.getElementById('myMap'));

var data = [
    { name: '南阳', value: ['1999 ～ forever', '这是我出生成长的地方，这是永远的家'] },
    { name: '苏州', value: ['2018.6', '园林、虎丘、拙政园...'] },
    { name: '杭州', value: ['2018.6', '西湖、千岛湖、互联网...'] },
    { name: '新乡', value: ['2018.9', '我的大学：河师大！'] },
    { name: '襄阳', value: ['2016.4', '南船北马、七省通衢'] },
    { name: '洛阳', value: ['2019.9', '牡丹、白马寺、龙门石窟...'] },
    { name: '郑州', value: ['2020.8', '这是郑州、这里有她！'] },
    { name: '北京', value: ['2018.6', '独立生存的两个月，走遍北京'] },
    { name: '天津', value: ['2020.10', '遗憾的天津之眼，充实的假期'] },
    { name: '上海', value: ['2019.2', '这里是上海，有我的一家人'] },
    { name: '南京', value: ['2017.6', '夫子庙、中山陵、纪念馆...'] },
    { name: '开封', value: ['2019.8', '开封府、清明上河园、大宋武侠城...'] },
    { name: '长沙', value: ['2022.9', '橘子洲头、岳麓山、茶颜悦色...'] },
    { name: '桐庐', value: ['2022.9', '垂云通天河、大奇山景区、富春江小三峡、严子陵钓台、龙门古镇、黄公望隐居地...'] },
    { name: '泰山', value: ['2022.2', '泰山，原名岱山，五岳之首、主峰玉皇顶，海拔1532.7米。'] },
    { name: '武功山', value: ['2023.6', '武功山，好汉坡，绝望坡，主峰白鹤峰（金顶）海拔1918.3米，两天一夜重装反穿。'] },
];
var geoCoordMap = {
    '南阳': [112.5396, 33.0036],
    '苏州': [120.63132, 31.30227],
    '杭州': [120.21201, 30.2084],
    '新乡': [113.90598, 35.3718],
    '襄阳': [112.13555, 32.04487],
    '洛阳': [112.51078, 34.70431],
    '郑州': [113.6401, 34.72468],
    '北京': [116.23128, 40.22077],
    '天津': [117.30983, 39.71755],
    '上海': [121.48941, 31.40527],
    '南京': [118.8921, 31.32751],
    '开封': [114.34816, 34.78861],
    '长沙': [112.945333, 28.233971],
    '桐庐': [119.68853, 29.79779],
    '泰山': [117.13446, 36.19411],
    '武功山': [114.173162, 27.454619],
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {},
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#1c2230',
        borderColor: '#81a4c2',
        borderWidth: 1,
        formatter: function(params) {
            name = params.name
            time = params.value[2]
            describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                name +
                '</div>' +
                time +
                '<br>' +
                describe;
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#1e2132',
                borderColor: '#7a9ebe'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series: [{
        name: '足迹',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#1adaff',
                shadowBlur: 10,
                shadowColor: '1adaff'
            }
        },
        zlevel: 1
    }]
};

myChart.setOption(option);