Ext.define('SCE.view.chart.theme.Awesome', {
    extend: 'Ext.chart.theme.Base',
    singleton: true,
    alias: 'chart.theme.awesome',

    config: {
    	colors: ['#6F5092', '#64BD4F'],
    	// baseColor: '#6F5092',
	    gradients: {
	    	type: 'linear',
            degrees:90
		    // type: 'radial',
	     //    start: {
	     //        x: 0,
	     //        y: 0,
	     //        r: 0
	     //    },
	     //    end: {
	     //        x: 0,
	     //        y: 0,
	     //        r: 2
	     //    },
	     //    stops: [
	     //        {
	     //         offset: 0,
	     //         color: 'white'
	     //        },
	     //        {
	     //         offset: 1,
	     //         color: '#6F5092'
	     //        }
	     //    ]
	    },
		chart: {
	        defaults: {
	            background: 'pink'
	        },
	        cartesian: {
	        	background: {
		            type: 'image',
		            src: 'http://www.psdgraphics.com/file/energy-efficiency-background.jpg'
		        }
	        }
	    },
	    series: {
		  defaults: {
		    style: {
		      lineWidth: 2
		    }
		  },
		  bar: {
		    animation: {
		      easing: 'bounceIn',
		      duration: 1000
		    },
		    style: {
		    	// fillStyle: '#6F5092',
		    	// strokeStyle: '#6F5092'
		    }
		  },
		  line: {
		  	style: {
		  		// fillStyle: '#64BD4F',
		    	strokeStyle: '#00904B'
		  	}
		  }
		},
		axis: {
		  defaults: {
		    style: {strokeStyle: 'red'}
		  },
		  left: {
		    grid: {
                odd: {
                    fillStyle: 'yellow'
                },
                even: {
                    fillStyle: 'cyan'
                },
                opacity: 0.7
            },
		    title: {fillStyle: '#6F5092', fontSize: 'default*1.5'},
		    label: {fillStyle: '#6F5092', fontSize: 'default*1.5'}
		  },
		  right: {
		    title: {fillStyle: '#00904B'},
		    label: {fillStyle: '#00904B', rotationRads: -45}
		  },
		  bottom: {
		  	grid: {
                odd: {
                    fillStyle: '#999'
                }
            }
		  }
		}
}
});