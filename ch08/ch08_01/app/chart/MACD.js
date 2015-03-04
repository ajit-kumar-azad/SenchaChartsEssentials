/**
 * @class SCE.chart.MACD
 * @extends Ext.chart.CartesianChart
 *
 * MovingAverageConvergenceDivergence (MACD) chart that looks for numeric axis and adds MACD specific 
 * configuration such as fields. fields is defaulted to ['macd', 'sigmacd'] as this field is 
 * added by the MACD series to the records.
 * 
 * The calculated MACD and signal values are set as "macd" and "sigmacd" fields, respectively, on the record
 */
Ext.define("SCE.chart.MACD", {
    extend: 'Ext.chart.CartesianChart',
    requires: ['SCE.series.MACD', 
                'SCE.sprite.MACD'],

    xtype: 'macdchart',

    initConfig: function(config) {

        Ext.Array.each(config.axes, function(axis, index, recs) {
            if (axis.type === 'numeric') {
                Ext.apply(axis, {
                    fields: ['macd', 'sigmacd', 'histmacd']
                });
            }
        });

        //add a line series for MACD Signal line and a bar for MACD Histogram
        config.series.push({
            store: config.series[0].store,
            type: 'line',
            xField: 'date',
            yField: 'sigmacd',
            style: {
                stroke: 'rgba(255,102,102,0.75)',
                miterLimit: 1
            }
        }, {
            store: config.series[0].store,
            type: 'bar',
            xField: 'date',
            yField: 'histmacd',
            style: {
                stroke: 'rgba(228,124,124,0.75)',
                fillStyle: 'rgba(228,124,124,0.75)'
            }
        });

        this.callParent(arguments);
    }
});
