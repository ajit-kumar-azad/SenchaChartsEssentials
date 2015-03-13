// Add the background image to the container
Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
	proceed.call(this);
	this.container.style.background = 'url(http://www.psdgraphics.com/file/energy-efficiency-background.jpg) 0px 0px/600px 500px no-repeat';
});


Highcharts.theme = {
	colors: ['#94AE0A', '#486989'],
	chart: {
		backgroundColor: null
	},
    credits: {
    	enabled: false
    },
	title: {
		style: {
			color: 'black',
			fontSize: '22px',
			fontWeight: 'bold'
		}
	},
	tooltip: {
		borderWidth: 0
	},
	legend: {
		backgroundColor: '#F2EAEC',
		itemStyle: {
			fontWeight: 'bold',
			fontSize: '13px'
		}
	},
	xAxis: {
		lineColor: '#333'
	},
	yAxis: {
		lineColor: '#333',
		tickColor: '#333',
		labels: {
			style: {
				color: '#333'
			}
		}
	},
	plotOptions: {
		series: {
			shadow: true
		}
	}
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
