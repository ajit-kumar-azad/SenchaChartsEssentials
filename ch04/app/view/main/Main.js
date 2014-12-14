Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'SCE.view.CandleStick',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'SCE.chart.MACD',
        'SCE.model.Stock', 
        'SCE.store.Apple'
    ],

    xtype: 'app-main',

    items: [
            {
                xtype: 'candlestick-test-chart',
                height: 350,
            },
            {
                xclass: 'SCE.chart.MACD',
                height: 250,
                background: 'white',
                series: [
                    {
                        store: Ext.create('SCE.store.Apple', {}), //'Apple',
                        type: 'macd',
                        xField: 'date',
                        yField: 'macd',
                        closeField: "close",
                        period1: 12,
                        period2: 26,
                        signalPeriod: 9,
                        style: {
                            stroke: 'rgba(67,174,175,0.75)',
                            miterLimit: 1
                        }
                    }
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left'
                    },
                    {
                        type: 'category',   
                        position: 'bottom',
                        fields: ['date'],
                        style: {
                            strokeStyle: '#666',
                            estStepSize: 150
                        },
                        dateFormat: 'Y',
                        segmenter: {
                            type: 'time',
                            step: {
                                unit: 'y',
                                step: 1
                            }
                        },
                        label: {
                            fontSize: 10,
                            fillStyle: '#666'
                        }
                    }
                ]
            }
        ]
});
