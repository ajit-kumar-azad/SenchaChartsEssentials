Ext.define('SCE.view.main.Polar', {
    extend: 'Ext.container.Container',

    xtype: 'app-polar',
    
    requires: ['SCE.view.chart.theme.Awesome', 'Ext.chart.theme.PurpleGradients'],

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        this.callParent(arguments);

        Ext.create('Ext.chart.PolarChart', {
        floating: true,
        title: 'Chart',

        // theme: 'purple-gradients',

        interactions: ['rotate'],
        height: 500,
        width: 500,

        insetPadding: 40,
        // insetPadding: {
        //     top: 40,
        //     left: 20,
        //     bottom: 5,
        //     right: 5
        // },

        legend: true,
        // legend: {
        //     // docked: 'right',
        //     padding: '40 0 10 0'
        // },
        autoShow: true,

        // animation: true,
        // animation: {
        //     easing: 'elasticIn',
        //     duration: 1000
        // },

        //shadow styling

        // shadow: true,
        shadow: 'frame',
        shadowOffset: 20,
        
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
        colors: ['pink', '#60D5DB'],

        store: {
            fields: ['month', 'sales', 'order'],
            data: [
                { month: 'Q1', sales: 180, order: 20 },
                { month: 'Q2', sales: 250, order: 120 },
                { month: 'Q3', sales: 75, order: 80},
                { month: 'Q4', sales: 180, order: 25}
            ]
        },
        axes: [
        {
            type: 'category',
            position: 'angular',
            fields: ['month'],
            grid: true,
            // grid: {
            //     odd: {
            //         fillStyle: '#999'
            //     }
            // },
            label: {
                fillStyle: 'purple',
                fontSize: 14,
                fontStyle: 'italic',
                fontFamily: 'Shadows Into Light',
                fontWeight: 400
            }
        }, 
        {
            title: 'Sale',
            type: 'numeric',
            position: 'radial',
            fields: ['sales'],
            // grid: true,
            grid: {
                odd: {
                    fillStyle: 'yellow'
                },
                even: {
                    fillStyle: 'cyan'
                },
                opacity: 0.3
            },
            label: {
                fontSize: 10,
                fontFamily: 'ShadowsIntoLight',
                fontWeight: 400,
                color: 'purple'
            },
            // style: {
            //     strokeStyle: 'red'
            //     // textPadding: 20,
            //     // minorTickSize: 20,
            //     // majorTickSize: 20,
            //     // lineWidth: 10,
            //     // axisLine: false,
                
            // },
            renderer: function(label, layout, lastLabel) {
                return '₹' + label;
            }
        },
        {
            title: {
                text: 'Order',
                color: 'red',
                // fontFamily: 'ShadowsIntoLight'
            },
            type: 'numeric',
            position: 'radial',
            fields: ['order'],
            // maximum: 200,
            // grid: true,
            // label: {
            //     fontSize: 14,
            //     fontFamily: 'ShadowsIntoLight',
            //     fontWeight: 700,
            //     color: 'red',
            //     rotationRads: -45
            // },
            renderer: function(label, layout, lastLabel) {
                return '';
            }
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
            type: 'radar',
            xField: 'month',
            yField: 'sales',
            title: 'Sale', 
            animation: {
                easing: 'easeIn',
                duration: 1000
            },
            colors: ['#888'],
            useDarkerStrokeColor: false,
            showMarkers: true,
            marker: {
                type: 'cross',
                strokeStyle: 'red'
            },
            markerSubStyle: {
                fillStyle: 'red'
            }
        }, {
            type: 'radar',
            xField: 'month',
            yField: 'order',
            title: 'Order',
            showMarkers: true,
            marker: {
                type: 'circle',
                radius: 5,
                // fillStyle: 'url(#gradientId1)',
                // strokeStyle: 'url(#gradientId2)',
                // fillStyle: 'red'
            },
            style: {
                opacity: 0.5,
                fillStyle: 'red'
            },
            markerSubStyle: {
                fillStyle: 'green'
            },
            // subStyle: {
            //     fillStyle: 'purple'
            // }
        }]
    });
    }
});
