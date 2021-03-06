function getHeatBlock() {
    var myChart = echarts.init(document.getElementById('mapContainer'));

    var all_position = new Array;
    var all_value = new Array;
    var convertData = function (index) {
        console.log(index);
        var res = [];
        for (var i = 0; i < all_position[index].length; i++) {
            var tmp = all_position[index][i];
            tmp.concat(all_value[index][i]);
            res.push(tmp);
        }

        return res;
    };

    $.getJSON('../static/data/2016-3-1_0-24.json', function (data) {
        var routesdata = [];

        for (var i = 0; i < data.data.length; i += 1) {
            var tmp_position = new Array;
            var tmp_value = new Array;
            console.log(data.data[i].time);
            console.log(data.data[i].positions);

            for (var j = 0; j < data.data[i].positions.length; j++) {
                tmp_position.push(data.data[i].positions[j]);
                tmp_value.push(1);
            }
            all_position.push(tmp_position);
            all_value.push(tmp_value);
        }

        console.log(all_position);
        console.log(all_position.length);
        console.log(all_value);

            option = {
                baseOption: {
                    title: {
                        text: "Traffic Heat Map",

                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: 'red',
                            fontSize: 20
                        },
                        subtextStyle: {
                            color: 'white',
                            fontSize: 16
                        }
                    },
                    timeline: {
                        autoPlay: true,
                        data: ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"],

                        axisType: 'category',
                        padding: [5, 5, 5, 5],
                        playInterval: 1500,
                        lineStyle: {color: 'white'},
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'white',
                                    fontSize: 13
                                }
                            }
                        }
                    },
                    bmap: {
                        center: [-73.97, 40.75],
                        zoom: 14,
                        roam: true,
                        mapStyle: {
                            styleJson: [
                                {
                                    'featureType': 'land',     //调整土地颜色
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'color': '#081734'
                                    }
                                },
                                {
                                    'featureType': 'building',   //调整建筑物颜色
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'color': '#04406F'
                                    }
                                },
                                {
                                    'featureType': 'building',   //调整建筑物标签是否可视
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'highway',     //调整高速道路颜色
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'color': '#015B99'
                                    }
                                },
                                {
                                    'featureType': 'highway',    //调整高速名字是否可视
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'arterial',   //调整一些干道颜色
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'color': '#003051'
                                    }
                                },
                                {
                                    'featureType': 'arterial',
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'green',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'water',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'color': '#044161'
                                    }
                                },
                                {
                                    'featureType': 'subway',    //调整地铁颜色
                                    'elementType': 'geometry.stroke',
                                    'stylers': {
                                        'color': '#003051'
                                    }
                                },
                                {
                                    'featureType': 'subway',
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'railway',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'railway',
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'all',     //调整所有的标签的边缘颜色
                                    'elementType': 'labels.text.stroke',
                                    'stylers': {
                                        'color': '#313131'
                                    }
                                },
                                {
                                    'featureType': 'all',     //调整所有标签的填充颜色
                                    'elementType': 'labels.text.fill',
                                    'stylers': {
                                        'color': '#FFFFFF'
                                    }
                                },
                                {
                                    'featureType': 'manmade',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'manmade',
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'local',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'local',
                                    'elementType': 'labels',
                                    'stylers': {
                                        'visibility': 'off'
                                    }
                                },
                                {
                                    'featureType': 'subway',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'lightness': -65
                                    }
                                },
                                {
                                    'featureType': 'railway',
                                    'elementType': 'all',
                                    'stylers': {
                                        'lightness': -40
                                    }
                                },
                                {
                                    'featureType': 'boundary',
                                    'elementType': 'geometry',
                                    'stylers': {
                                        'color': '#8b8787',
                                        'weight': '1',
                                        'lightness': -29
                                    }
                                }]
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 500,
                        splitNumber: 5,
                        inRange: {
                            color: ['blue', 'green', 'yellow', 'red']
                        },
                        textStyle: {
                            color: '#fff'
                        },
                        bottom: 30
                    },
                    series: [{
                        type: 'heatmap',
                        mapType: 'china',
                        coordinateSystem: 'bmap',
                        blurSize: 50
                    }]
                },
                options: [
                {
                    series: [{
                        data: convertData(0)
                    }]
                },
                {
                    series: [{
                        data: convertData(1)
                    }]
                },
                {
                    series: [{
                        data: convertData(2)
                    }]
                },
                {
                    series: [{
                        data: convertData(3)
                    }]
                },
                {
                    series: [{
                        data: convertData(4)
                    }]
                },
                {
                    series: [{
                        data: convertData(5)
                    }]
                },
                {
                    series: [{
                        data: convertData(6)
                    }]
                },
                {
                    series: [{
                        data: convertData(7)
                    }]
                },
                {
                    series: [{
                        data: convertData(8)
                    }]
                },
                {
                    series: [{
                        data: convertData(9)
                    }]
                },
                {
                    series: [{
                        data: convertData(10)
                    }]
                },
                {
                    series: [{
                        data: convertData(11)
                    }]
                },
                {
                    series: [{
                        data: convertData(12)
                    }]
                },
                {
                    series: [{
                        data: convertData(13)
                    }]
                },
                {
                    series: [{
                        data: convertData(14)
                    }]
                }

            ],
            };
            console.log(option);
        $("#inputWrite").empty();
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        };


    });
}

