Ext.define('SCE.chart.PeriodicTable', {
	extend: 'Ext.chart.SpaceFillingChart',

	xtype: 'periodictable',

	applyStore: function(newStore) {

        if (newStore) {
            var me = this;

            var series = me.getSeries();
            if (series && series.length > 0) {
            	series[0].setStore(newStore);
            }
            return newStore;
        }
    }
});