Ext.define('SCE.series.MarketClock', {

	extend: 'Ext.chart.series.Polar',

	requires: ['SCE.sprite.MarketClock'],

	type: 'marketclock',
    alias: 'series.marketclock',
    seriesType: 'marketclock',
	
	config: {
        /**
         * @cfg {String} labelField
         * @deprecated Use {@link Ext.chart.series.Pie#label} instead.
         * The store record field name to be used for the pie slice labels.
         */
        labelField: false,

        /**
         * @cfg {String} lengthField
         * The store record field name to be used for the pie slice lengths.
         * The values bound to this field name must be positive real numbers.
         */
        lengthField: false,

        /**
         * @cfg {Number} [totalAngle=2*PI] The total angle of the pie series.
         */
        totalAngle: 2 * Math.PI,

        /**
         * @cfg {Number} Allows adjustment of the radius by a specific percentage.
         */
        radiusFactor: 100,

        /**
         * @cfg {Array} hidden Determines which pie slices are hidden.
         */
        hidden: [],

        /**
         * @cfg {Boolean} clockwise
         * Whether the pie slices are displayed clockwise. Default's true.
         */
        clockwise: true,

        /**
         * @cfg {Number} donut Specifies the radius of the donut hole, as a percentage of the chart's radius.
         * Defaults to 0 (no donut hole).
         */
        donut: 90

    },

    directions: ['X'],

    setField: function (f) {
        return this.setXField(f);
    },

    getField: function () {
        return this.getXField();
    },

    applyLabel: function (newLabel, oldLabel) {
        if (Ext.isObject(newLabel) && !Ext.isString(newLabel.orientation)) {
            // Override default label orientation from '' to 'vertical'.
            Ext.apply(newLabel = Ext.Object.chain(newLabel), {orientation: 'vertical'});
        }
        if (!oldLabel) {
            oldLabel = new Ext.chart.Markers({zIndex: 10});
            oldLabel.setTemplate(new Ext.chart.label.Label(newLabel));
        } else {
            oldLabel.getTemplate().setAttributes(newLabel);
        }
        return oldLabel;
    },

    updateLabelData: function () {
        // var me = this,
        //     store = me.getStore(),
        //     items = store.getData().items,
        //     sprites = me.getSprites(),
        //     labelField = me.getLabel().getTemplate().getField(),
        //     i, ln, labels, sprite;
        // if (sprites.length > 0 && labelField) {
        //     labels = [];
        //     for (i = 0, ln = items.length; i < ln; i++) {
        //         labels.push(items[i].get(labelField));
        //     }
        //     for (i = 0, ln = sprites.length; i < ln; i++) {
        //         sprite = sprites[i];
        //         sprite.setAttributes({label: labels[i]});
        //         // sprite.putMarker('labels', {}, sprite.attr.attributeId);
        //     }
        // }
    },

    coordinateX: function () {
        var me = this,
            store = me.getStore(),
            items = store.getData().items,
            itemCount = items.length,
            field = me.getXField(),
            lengthField = me.getLengthField(),
            value, sum = 0,
            length, maxLength = 0,
            summation = [], i,
            lastAngle = 0,
            totalAngle = me.getTotalAngle(),
            clockwise = me.getClockwise() ? 1 : -1,
            sprites = me.getSprites();

        if (!sprites) {
            return;
        }

        for (i = 0; i < itemCount; i++) {
            value = Math.abs(Number(items[i].get(field))) || 0;
            length = lengthField && Math.abs(Number(items[i].get(lengthField))) || 0;
            sum += value;
            if (length > maxLength) {
                maxLength = length;
            }
            summation[i] = sum;
        }
        me.maxLength = maxLength;

        if (sum !== 0) {
            sum = totalAngle / sum;
        }
        for (i = 0; i < itemCount; i++) {
            sprites[i].setAttributes({
                startAngle: lastAngle,
                endAngle: lastAngle = (sum ? clockwise * summation[i] * sum : 0),
                globalAlpha: 1
            });
        }
        for (; i < me.sprites.length; i++) {
            sprites[i].setAttributes({
                startAngle: totalAngle,
                endAngle: totalAngle,
                globalAlpha: 0
            });
        }
        me.getChart().refreshLegendStore();
    },

    updateCenter: function (center) {
        this.setStyle({
            translationX: center[0] + this.getOffsetX(),
            translationY: center[1] + this.getOffsetY()
        });
        this.doUpdateStyles();
    },

    updateRadius: function (radius) {
        this.setStyle({
            startRho: radius * this.getDonut() * 0.01,
            endRho: radius * this.getRadiusFactor() * 0.01
        });
        this.doUpdateStyles();
    },

    getStyleByIndex: function (i) {
        var me = this,
            items = me.getStore().getData().items,
            lengthField = me.getLengthField(),
            radius = me.getRadius(),
            style, length, startRho, endRho;
        length = lengthField && Math.abs(Number(items[i].get(lengthField))) || 0;
        startRho = radius * me.getDonut() * 0.01;
        endRho = radius * me.getRadiusFactor() * 0.01;
        style = this.callParent([i]);
        style.startRho = startRho;
        style.endRho = me.maxLength ? (startRho + (endRho - startRho) * length / me.maxLength) : endRho;
        return style;
    },

    rotationOffset: -0.5 * Math.PI,

    updateRotation: function (rotation) {
        this.setStyle({
            // Subtract 90 degrees from rotation, so that `rotation` config's default
            // zero value makes first pie sector start at noon, rather than 3 o'clock.
            rotationRads: rotation + this.rotationOffset
        });
        this.doUpdateStyles();
    },

    updateTotalAngle: function (totalAngle) {
        this.processData();
    },

    getSprites: function () {
        var me = this,
            chart = me.getChart(),
            store = me.getStore();
        if (!chart || !store) {
            return [];
        }
        me.getColors();
        me.getSubStyle();
        var items = store.getData().items,
            length = items.length,
            animation = me.getAnimation() || chart && chart.getAnimation(),
            sprites = me.sprites, sprite,
            spriteIndex = 0, rendererData,
            i, spriteCreated = false,
            label = me.getLabel(),
            labelTpl = label.getTemplate();

        rendererData = {
            store: store,
            field: me.getField(),
            series: me
        };

        for (i = 0; i < length; i++) {
        	// console.log('Iter: ' + i);
            sprite = sprites[i];
            if (!sprite) {
                sprite = me.createSprite();
                // if (me.getHighlight()) {
                //     sprite.config.highlight = me.getHighlight();
                //     sprite.addModifier('highlight', true);
                // }
                if (labelTpl.getField()) {
                    labelTpl.setAttributes({
                        labelOverflowPadding: me.getLabelOverflowPadding()
                    });
                    labelTpl.fx.setCustomDurations({'callout': 200});
                    // sprite.bindMarker('labels', label);
                }
                sprite.setAttributes(me.getStyleByIndex(i));
                sprite.rendererData = rendererData;
                sprite.rendererIndex = spriteIndex++;
                spriteCreated = true;
            }
            sprite.fx.setConfig(animation);
        }
        if (spriteCreated) {
            me.doUpdateStyles();
        }
        return me.sprites;
    },

    betweenAngle: function (x, a, b) {
        var pp = Math.PI * 2,
            offset = this.rotationOffset;
        if (!this.getClockwise()) {
            x *= -1;
            a *= -1;
            b *= -1;
            a -= offset;
            b -= offset;
        } else {
            a += offset;
            b += offset;
        }
        b -= a;
        x -= a;
        x %= pp;
        b %= pp;
        x += pp;
        b += pp;
        x %= pp;
        b %= pp;
        return x < b;
    },

    /**
     * Returns the pie slice for a given angle
     * @param {Number} angle The angle to search for the slice
     * @return {Object} An object containing the reocord, sprite, scope etc.
     */
    getItemForAngle: function (angle) {
        // var me = this,
        //     sprites = me.getSprites(),
        //     attr;

        // angle %= Math.PI * 2;

        // while (angle < 0) {
        //     angle += Math.PI * 2;
        // }

        // if (sprites) {
        //     var store  = me.getStore(),
        //         items  = store.getData().items,
        //         hidden = me.getHidden(),
        //         i      = 0,
        //         ln     = store.getCount();

        //     for (; i < ln; i++) {
        //         if(!hidden[i]) {
        //             // Fortunately, item's id equals its index in the instances list.
        //             attr = sprites[i].attr;

        //             if (attr.startAngle <= angle &&  attr.endAngle >= angle) {
        //                 return {
        //                     series: me,
        //                     sprite: sprites[i],
        //                     index: i,
        //                     record: items[i],
        //                     field: me.getXField()
        //                 };
        //             }
        //         }
        //     }
        // }

        // return null;
    },

    getItemForPoint: function (x, y) {
        // var me = this,
        //     sprites = me.getSprites();
        // if (sprites) {
        //     var center = me.getCenter(),
        //         offsetX = me.getOffsetX(),
        //         offsetY = me.getOffsetY(),
        //         originalX = x - center[0] + offsetX,
        //         originalY = y - center[1] + offsetY,
        //         store = me.getStore(),
        //         records = store.getData().items,
        //         direction = Math.atan2(originalY, originalX) - me.getRotation(),
        //         radius = Math.sqrt(originalX * originalX + originalY * originalY),
        //         startRadius = me.getRadius(),
        //         hidden = me.getHidden(),
        //         i, ln, attr;

        //     for (i = 0, ln = records.length; i < ln; i++) {
        //         if (!hidden[i]) {
        //             // Fortunately, item's id equals its index in the instances list.
        //             attr = sprites[i].attr;
        //             if (radius >= startRadius + attr.margin && radius <= attr.endRho + attr.margin) {
        //                 if (me.betweenAngle(direction, attr.startAngle, attr.endAngle)) {
        //                     return {
        //                         series: me,
        //                         sprite: sprites[i],
        //                         index: i,
        //                         record: records[i],
        //                         field: me.getXField()
        //                     };
        //                 }
        //             }
        //         }
        //     }
        //     return null;
        // }
    },

    provideLegendInfo: function (target) {
        var me = this,
            store = me.getStore();
        if (store) {
            var items = store.getData().items,
                labelField = me.getLabel().getTemplate().getField(),
                field = me.getField(),
                hidden = me.getHidden(),
                i, style, fill;

            for (i = 0; i < items.length; i++) {
                style = me.getStyleByIndex(i);
                fill = style.fillStyle;
                if (Ext.isObject(fill)) {
                    fill = fill.stops && fill.stops[0].color;
                }
                target.push({
                    name: labelField ? String(items[i].get(labelField))  : field + ' ' + i,
                    mark: fill || style.strokeStyle || 'black',
                    disabled: hidden[i],
                    series: me.getId(),
                    index: i
                });
            }
        }
    }
});