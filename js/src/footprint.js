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
    { name: '拉萨', value: ['2023.9.23-24', '布达拉宫、西藏博物馆、大昭寺、八廊街、缺氧不缺信仰！'] },
    { name: '羊卓雍措', value: ['2023.9.25', '鲁日拉观景台、日托寺、雅江河谷观景台'] },
    { name: '纳木措', value: ['2023.9.26', '纳木措(多琼扎不涨)'] },
    { name: '林芝', value: ['2023.9.27', '巴松措、新措、雅鲁藏布江峡谷、索松村'] },
    { name: '鲁朗', value: ['2023.9.28', '南迦巴瓦峰（日照金山）、高原牧场、贡措湖、通麦特大桥'] },
    { name: '然乌', value: ['2023.9.29', '米堆冰川、然乌湖、来古冰川'] },
    { name: '左贡', value: ['2023.9.30', '江大桥、怒江72拐、东达山'] },
    { name: '巴塘', value: ['2023.10.1', '金沙江大桥、措普沟、海子山、姊妹湖、毛垭大草原'] },
    { name: '稻城亚丁', value: ['2023.10.2', '香格里拉镇、稻城亚丁(牛奶海+五色海+珍珠海+仙乃日+洛绒牛场）'] },
    { name: '理塘', value: ['2023.10.3', '香格里拉镇、稻城亚丁(牛奶海+五色海+珍珠海+仙乃日+洛绒牛场）'] },
    { name: '新都桥', value: ['2023.10.4', '贡嘎雪山观景台、新都桥、鱼子西、格底拉姆·天空之城、墨石公园、丹巴甲居藏寨'] },
    { name: '成都', value: ['2023.10.5', '四姑娘山（双桥沟、长坪沟）'] },
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
    '拉萨': [91.13775, 29.65262],
    '羊卓雍措': [90.683333,28.933333],
    '纳木措': [90.55, 30.7],
    '林芝': [94.35936, 29.65973],
    '鲁朗县': [94.79761, 29.94921],
    '然乌湖': [96.8, 29.45],
    '左贡县': [997.85, 29.67],
    '巴塘': [99.10409, 30.00423],
    '稻城亚丁': [100.31608, 28.53795],
    '理塘': [100.27005, 29.99674],
    '新都桥': [101.493170, 30.045210],
    '成都': [104.065735, 30.659462],
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