Ext.define('SCE.view.main.Cartesian', {
    extend: 'Ext.container.Container',

    xtype: 'app-cartesian',
    
    requires: ['SCE.view.chart.theme.Awesome', 'Ext.chart.theme.PurpleGradients'],

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        this.callParent(arguments);

        Ext.create('Ext.chart.CartesianChart', {
        title: 'Chart',

        floating: true,
        height: 500,
        width: 500,
        autoShow: true,

        //shadow styling

        // shadow: true,
        shadow: 'frame',
        shadowOffset: 20,

        // theme: 'awesome',

        // insetPadding: 40,
        insetPadding: {
            top: 40,
            left: 20,
            bottom: 5,
            right: 5
        },

        // legend: true,
        legend: {
            // docked: 'right',
            padding: '10 0 10 0'
        },
        
        //chart background styling

        // background: {
        //     type: 'image',
        //     src: 'http://www.psdgraphics.com/file/energy-efficiency-background.jpg'
        // },
        // background: {
        //     type: 'linear',
        //     degrees: 0,
        //     stops: [
        //         {
        //             offset: 0,
        //             color: 'white'
        //         },
        //         {
        //             offset: 1,
        //             color: 'orange'
        //         }
        //     ]
        // },
        // background: {
        // type: 'radial',
        // start: {
        //     x: 0,
        //     y: 0,
        //     r: 0
        // },
        // end: {
        //     x: 0,
        //     y: 0,
        //     r: 1
        // },
        // stops: [
        //     {
        //      offset: 0,
        //      color: 'white'
        //     },
        //     {
        //      offset: 1,
        //      color: 'orange'
        //     }
        // ]
        // },
        // background: 'pink',

        //chart gradients styling

        // gradients: [{
        //     id: 'gradientId1',
        //     type: 'linear',
        //     angle: 45,
        //     stops: [{
        //         offset: 0,
        //         color: 'white'
        //     }, {
        //        offset: 1,
        //        color: 'orange'
        //     }]
        // }, {
        //    id: 'gradientId2',
        //    type: 'radial',
        //    stops: [{
        //        offset: 0,
        //        color: 'white',
        //    }, {
        //        offset: 1,
        //        color: 'orange',
        //    }]
        // }],

        //colors
        // colors: ['pink', '#60D5DB'],

        store: {
            fields: ['month', 'sales', 'order'],
            data: [
                { month: 'Q1', sales: 100, order: 20 },
                { month: 'Q2', sales: 250, order: 120 },
                { month: 'Q3', sales: 75, order: 40},
                { month: 'Q4', sales: 120, order: 25}
            ]
        },
        axes: [
        {
            title: 'Quarter',
            type: 'category',
            position: 'bottom',
            fields: ['month'],
            // grid: true,
            // grid: {
            //     odd: {
            //         fillStyle: '#999'
            //     }
            // },
            // label: {
            //     fillStyle: 'purple',
            //     fontSize: 14,
            //     fontStyle: 'italic',
            //     fontFamily: 'Shadows Into Light',
            //     fontWeight: 400
            // }
        }, 
        {
            title: 'Sale',
            type: 'numeric',
            position: 'left',
            fields: ['sales'],
            // grid: true,
            // grid: {
            //     odd: {
            //         fillStyle: 'yellow'
            //     },
            //     even: {
            //         fillStyle: 'cyan'
            //     },
            //     opacity: 0.7
            // },
            // style: {
            //     strokeStyle: 'red',
            //     textPadding: 40,
            //     // minorTickSize: 20,
            //     // majorTickSize: 20,
            //     lineWidth: 2,
            //     // axisLine: false
                
            // },
            renderer: function(label, layout, lastLabel) {
                return '₹' + label;
            }
        },
        {
            title: {
                text: 'Order',
                // color: 'red',
                fontFamily: 'ShadowsIntoLight'
            },
            type: 'numeric',
            position: 'right',
            fields: ['order'],
            maximum: 200,
            // label: {
            //     fontSize: 14,
            //     color: 'red',
            //     rotationRads: -45
            // }
        }],
        sprites: [{
            type: 'text',
            text: 'Quaterly Sales and Orders',
            font: '22px Helvetica',
            width: 100,
            height: 20,
            x: 40,
            y: 20
        }],
        series: [{
            type: 'bar',
            xField: 'month',
            yField: 'sales',
            title: 'Quarterly Sale', 
            animation: {
                easing: 'elasticIn',
                duration: 1000
            },
            // colors: ['#888'],
            // useDarkerStrokeColor: false,
            // highlight: {
            //     strokeStyle: '#094144',
            //     fillStyle: '#60D5DB',
            //     shadowColor: "#999",
            //     shadowOffsetX: 5,
            //     shadowOffsetY: 5,
            //     translationY: 5
            // },
            tooltip: {
                trackMouse: true,
                // style: 'background: #fff',
                renderer: function(storeItem, item) {
                    this.setHtml(storeItem.get('month') + ' Sales: ₹ ' + storeItem.get('sales'));
                }
            }
        }, {
            type: 'line',  
            xField: 'month',
            yField: 'order',
            title: 'Quarterly Order',
            showMarkers: true,
            // highlight: {
            //     strokeStyle: '#094144',
            //     fillStyle: '#60D5DB',
            //     shadowColor: "#999",
            //     shadowOffsetX: 5,
            //     shadowOffsetY: 5,
            //     translationY: 5
            // },
            marker: {
                // type: 'circle',
                radius: 15,
                fillStyle: 'url(#gradientId1)',
                strokeStyle: 'url(#gradientId2)',
                // fillStyle: 'red'
            },
            style: {
                opacity: 0.5,
                fillStyle: 'red'
            },
            // markerSubStyle: {
            //     fillStyle: 'green',
            //     // strokeStyle: 'red',
            //     radius: 15,
            //     shadowColor: "pink",
            //     shadowOffsetX: 2,
            //     shadowOffsetY: 2
            // },
            // subStyle: {
            //     fillStyle: 'purple'
            // },
            renderer: function(sprite, config, rendererData, index) {
                if (config.type === 'marker') {
                    return { 
                        fillStyle: (index % 2 === 0 ? 'red' : 'black'),
                        radius: (index + 1) * 5
                    };
                }

                if (config.type === 'line') {
                    return {
                        lineWidth: (index + 1) * 2,
                        lineJoin: 'round'
                    }
                }

            }
        }]
    });
    }
});
