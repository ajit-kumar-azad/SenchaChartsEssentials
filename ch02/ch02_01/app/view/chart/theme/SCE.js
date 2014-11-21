Ext.define('SCE.view.chart.theme.SCE', {
    extend: 'Ext.chart.theme.Base',
    singleton: true,
    alias: 'chart.theme.sce',

    series: {
	  defaults: {
	    style: {
	      lineWidth: 2
	    }
	  },
	  bar: {
	    animation: {
	      easing: 'bounceOut',
	      duration: 1000
	    },
	    style: {
	    	fillStyle: '#6F5092',
	    	strokeStyle: '#6F5092'
	    }
	  },
	  area: {
	  	style: {
	  		fillStyle: '#64BD4F',
	    	strokeStyle: '#00904B'
	  	}
	  }
	},
	axis: {
	  defaults: {
	    style: {strokeStyle: 'red'}
	  },
	  left: {
	    title: {fillStyle: '#6F5092'},
	    label: {fillStyle: '#6F5092'}
	  },
	  right: {
	    title: {fillStyle: '#00904B'},
	    label: {fillStyle: '#00904B'}
	  }
	}
});