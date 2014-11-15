Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    height: 850,
    width: 850,
    
    items: [{
        xtype: 'draw',
        title: 'Chart',
        height: 500,
        width: 500
    }],

    createLine: function(x1, y1, x2, y2, sw) {
        return {
            type: 'path',
            stroke: 'black',
            path: 'M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2,
            lineWidth: sw ? sw : 2
        };

    },

    createPath: function(p, stroke, fill, opacity) {
        return {
            type: 'path',
            path: p,
            stroke: stroke ? stroke : 'black',
            lineWidth: 2,
            fillStyle: fill ? fill : 'none',
            fillOpacity: opacity ? opacity : 1
        };
    },

    createAxis: function(x1, y1, x2, y2, direction) {
        var line = this.createLine(x1, y1, x2, y2);
        var ah;

        //draw arrow head
        if (direction === "v") {
            var p = 'M' + x1 + ',' + y2 + ' L' + (x1 - 10*Math.sin(Math.PI/4)) + ',' + (this.maxY + 10*Math.cos(Math.PI/4));
            p += ' M' + x1 + ',' + y2 + ' L' + (x1 + 10*Math.sin(Math.PI/4)) + ',' + (this.maxY + 10*Math.cos(Math.PI/4));

            ah = this.createPath(p);
        }

        if (direction === "h") {
            var p = 'M' + x2 + ',' + y1 + ' L' + (this.maxX - 10*Math.cos(Math.PI/4)) + ',' + (this.maxX - 10*Math.sin(Math.PI/4));
            p += ' M' + x2 + ',' + y1 + ' L' + (this.maxX - 10*Math.cos(Math.PI/4)) + ',' + (this.maxX + 10*Math.sin(Math.PI/4));

            ah = this.createPath(p);
        }

        var axis = Ext.create('Ext.draw.sprite.Composite', {});
        axis.add(line);
        axis.add(ah);

        return axis;
    },

    createLabel: function(x, y, txt) {

        return {
            type: 'text',
            x: x,
            y: y,
            text: txt,
            font: '1.1em arial italic'
        };

    },

    createBar: function(x, y, w, h) {
        return {
            type: 'rect',
            x: x,
            y: y,
            width: w,
            height: h,
            fillStyle: '#E13987',
            stroke: '#E13987',
            lineWidth: 2
        };
    },

    createMarker: function(cx, cy, r) {
        return {
            type: 'circle',
            cx: cx,
            cy: cy,
            r: r,
            fillStyle: '#6F5092',
            stroke: '#6F5092',
            lineWidth: 2
        };
    },

    afterRender: function() {
        var samples = [100, 250, 175],
            gutter = 50,
            barWidth = 50,
            x0 = 50,
            y0 = 400,
            markerRadius = 10;

        var drawCt = this.down('draw');

        var surface = drawCt.getSurface();

        //draw axes
        this.maxX = x0 + samples.length*(barWidth + gutter) + gutter;
        this.maxY = y0 - 250 - 50;
        surface.add(this.createAxis(x0, y0, this.maxX, y0, 'h'));
        surface.add(this.createAxis(x0, y0, x0, this.maxY, 'v'));

        //create axis label
        var xLabel = this.createLabel(this.maxX/2, y0 + 30, 'Samples');
        var yLabel = this.createLabel(x0 - 40, y0 - (y0 - this.maxY)/2, 'Value');
        yLabel.rotationRads = -Math.PI/2;

        surface.add(xLabel);
        surface.add(yLabel);

        //draw bars
        for (var i=0; i<samples.length; i++) {
            var x, y, w = barWidth, h = samples[i];
            x = x0 + gutter + i*(w + gutter);
            y = y0 - h;

            var bar = this.createBar(x, y, w, h);
            var marker = this.createMarker(x + w/2, y, markerRadius);

            surface.add(bar);
            surface.add(marker);
            
        }

        //draw area chart
        var areaSamples = [20, 30, 20, 100, 140, 80, 40, 30, 60, 10, 75];
        var n = areaSamples.length;
        var gutter = (this.maxX - x0)/n;
        var start = true;
        var p = '';
        for (var i=0; i<n; i++) {
            var x = x0 + i*gutter , y = y0 - areaSamples[i];

            if (start) {
                p += 'M' + x + ',' + y;
                start = false;
            }
            
            p += ' L' + x + ',' + y;
        }

        //area - with border
        var area = this.createPath(p, '#00904B');
        surface.add(area);

        //fill the area chart
        p += ' L' + x + ',' + y0 + ' L' + x0 + ',' + y0 + ' Z';
        var fillArea = this.createPath(p,'none','#64BD4F', 0.5);
        surface.add(fillArea);

        //show cross-hair
        var overlay = drawCt.getSurface('overlay');
        var hl, vl, headerOffset;

        hl = this.createLine(-x0, -y0, -x0, -y0);
        vl = this.createLine(-x0, -y0, -x0, -y0);
        hl.lineDash = [5,5];
        vl.lineDash = [5,5];
        hl = overlay.add(hl);
        vl = overlay.add(vl);
        this.getEl().addListener('mousemove', function(evt, target) {
            var x = evt.getX(),
                y = evt.getY();

            //don't show the cross-hair if we are outside the chart area
            if (x < x0 || x > this.maxX || y < this.maxY || y > y0) {
                return;
            }

            headerOffset = drawCt.getHeader().getHeight();

            hl.setAttributes({
                path: 'M' + (x0 - 5) + ',' + (y - headerOffset) + ' L' + this.maxX + ',' + (y - headerOffset)
            });

            vl.setAttributes({
                path: 'M' + x + ',' + this.maxY + ' L' + x + ',' + (y0 + 10)
            });
            
            overlay.renderFrame();
        }, this);

        this.callParent(arguments);
    }
});
