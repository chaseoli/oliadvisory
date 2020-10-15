// IMPORTANT: Remember to set the background color of the parent element since the lines and dots are white

import { Component, ViewChild, AfterViewInit, ElementRef, HostListener} from '@angular/core';
import { style } from '@angular/animations';

interface IParticleSetup {
    noOfDots: number;
    distance: number;
    d_radius: number;
    array: IParticle[];
}

interface Ixy {
    x: number;
    y: number;
}

interface IColor {
    e: number;
    r: number;
    g: number;
    b: number;
    style: string;
}

interface IParticle extends Ixy {
    vx: number;
    vy: number;
    radius: number;
    text: string;
    rotate: number;
    color: IColor;
}

interface IParticleCanvas extends HTMLCanvasElement {
    color: number;
    lineWidth: number;
    width: number;
    height: number;
    noOfDots: number;
    distance: number;
    distanceRadius: number;
}

@Component({
    selector: 'app-particle',
    template:
        `<canvas #particleRef (mouseleave)="center()" (mousemove)="follow($event)"></canvas>`,
    styles: [
        `canvas {
        height: 100%;
        width: 100%;
    }`
    ]
})
export class ParticleComponent implements AfterViewInit {

    ctx: CanvasRenderingContext2D;
    particles: IParticleSetup;
    dotFrameWidth: number;
    dotFrameHeight: number;
    mouse: Ixy;
    raf: Window['requestAnimationFrame'];
    container: ElementRef; // containing component element "<app-particle><app-particle/>"

    // Exploring Angular DOM manipulation techniques using ViewContainerRef
    // https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02
    @ViewChild('particleRef', { read: ElementRef }) canvas: ElementRef;

    constructor(el: ElementRef) {
        this.container = el;
    }

    ngAfterViewInit(): void {
        // console.log(this.canvas.nativeElement);
        this.initParticles();
    }

    @HostListener('window:resize', ['$event'])
    onResize(e) {
        // resets the number of particles when screen is resized
        const canvas = this.canvas.nativeElement;
        this.createParticlesArray(canvas);
    }

    initParticles() {
        const canvas = this.canvas.nativeElement;
        this.ctx = this.canvas.nativeElement.getContext('2d');

        this.createParticlesArray(canvas);

        // get requestAnimationFrame that is compatible with this browser
        const _raf = this.checkRAFCompatibility();
        this.raf = _raf ? _raf.bind(window) : null;

        if (this.raf) {
            // loop in window.requestAnimationFrame (high performance)
            this.start();
        } else {
            // loop in timeout (poor performance)
            setInterval(() => {
                this.start();
            }, 60 / 1000);

        }
    }

    follow(e: MouseEvent) {
        // particle connections follow mouse pointer
        // console.log(e.pageX, e.pageY);
        // console.log(e);
        this.mouse.x = (e as any).layerX;
        this.mouse.y = (e as any).layerY;
    }

    center() {
        // particle connections are centered in canvas
        this.mouse = {
            x: this.dotFrameWidth / 2,
            // y: this.dotFrameHeight / 2
            y: this.dotFrameHeight / 3
        };
    }

    randNumColorLessThan255(e) {
        return Math.floor(255 * Math.random() + e);
    }

    rgbStyleWhite(r: number, g: number, b: number): string {
        return 'rgba(255,255,255, 1)';
    }

    styleNumCalc(rgb1: number, radius1: number, rgb2: number, radius2: number): number {
        return (rgb1 * radius1 + rgb2 * radius2) / (radius1 + radius2);
    }

    getStyleNums(p1: IParticle, p2: IParticle): string {

        const r = this.styleNumCalc(p1.color.r, p1.radius, p2.color.r, p2.radius);
        const g = this.styleNumCalc(p1.color.g, p1.radius, p2.color.g, p2.radius);
        const b = this.styleNumCalc(p1.color.b, p1.radius, p2.color.b, p2.radius);

        return this.rgbStyleWhite(Math.floor(r), Math.floor(g), Math.floor(b));
    }

    setColor(colorNum?: number): IColor {

        // default to 0 if null
        colorNum = colorNum || 0;

        const r = this.randNumColorLessThan255(colorNum); // returns a number between 0 and 255
        const g = this.randNumColorLessThan255(colorNum);
        const b = this.randNumColorLessThan255(colorNum);

        return {
            e: colorNum || 0,
            r: r,
            g: g,
            b: b,
            style: this.rgbStyleWhite(r, g, b)
        };

    }

    newParticle(): IParticle {

        const txtArr = [
            'A/R',
            'A/P',
            'Cash',
            'Asset',
            'Inventory',
            'Capital',
            'Revenue',
            'Cash Flow',
            'CPA',
            'Debit',
            'Credit',
            'Expenses',
            'Tax',
            'Assurance',
            'Advisory',
            'Technical',
            'GAAP',
            'IFRS',
            'Value',
            'Currency'
        ];

        return {
            x: Math.random() * this.dotFrameWidth,
            y: Math.random() * this.dotFrameHeight,
            vx: -.5 + Math.random(),
            vy: -.5 + Math.random(),
            radius: 3 * Math.random(),
            // text: (Math.round(Math.random() * 9)).toString(),
            text: txtArr[(Math.round(Math.random() * 20))],
            rotate: Math.random() * 180,
            color: this.setColor()
        };
    }
    /**
     * Sets the particle parameters for the canvas based on size
     *
     * @param {HTMLCanvasElement} canvas
     * @memberof ParticleComponent
     */
    createParticlesArray(canvas: HTMLCanvasElement) {

        const d = {
            color: 150,
            lineWidth: .5,
            // number of dots (based on height and width of the view)
            // noOfDots: 150,
            // noOfDots: Math.round((this.container.nativeElement.offsetWidth / 100) * (this.container.nativeElement.offsetHeight / 100)),
            noOfDots: Math.round(
                Math.max((this.container.nativeElement.offsetWidth / 100), 3)
                *
                Math.max((this.container.nativeElement.offsetHeight / 100), 3)),
            lineReach: 125,
            distanceFromPointer: 75
        };

        canvas.width = this.container.nativeElement.offsetWidth; // window.innerWidth;
        canvas.height = this.container.nativeElement.offsetHeight; // window.innerHeight;

        this.dotFrameWidth = canvas.width;
        this.dotFrameHeight = canvas.height;

        this.ctx.lineWidth = d.lineWidth;

        this.ctx.strokeStyle = this.setColor(d.color).style;

        this.ctx.clearRect(0, 0, this.dotFrameWidth, this.dotFrameHeight);

        this.center();

        this.particles = {
            noOfDots: d.noOfDots,
            distance: d.lineReach,
            d_radius: d.distanceFromPointer,
            array: []
        };

        for (let e = 0; e < this.particles.noOfDots; e++) {
            const newParticle = this.newParticle();
            this.particles.array.push(newParticle);
        }

    }

    updateDots() {

        for (let e = 0; e < this.particles.noOfDots; e++) {

            const t = this.particles.array[e];

            if (t.y < 0 || t.y > this.dotFrameHeight) {
                t.vx = t.vx;
                t.vy = -t.vy;
            }

            if (t.x < 0 || t.x > this.dotFrameWidth) {
                t.vx = -t.vx;
                t.vy = t.vy;
            }

            t.x += t.vx;
            t.y += t.vy;

            // t.rotate = t.rotate + 1 * Math.PI / 180;
        }
    }

    drawLines() {
        for (let e = 0; e < this.particles.noOfDots; e++) {
            for (let t = 0; t < this.particles.noOfDots; t++) {

                const p1 = this.particles.array[e];
                const p2 = this.particles.array[t];

                if (p1.x - p2.x < this.particles.distance
                    && p1.y - p2.y < this.particles.distance
                    && p1.x - p2.x > -this.particles.distance
                    && p1.y - p2.y > -this.particles.distance
                    && p1.x - this.mouse.x < this.particles.d_radius
                    && p1.y - this.mouse.y < this.particles.d_radius
                    && p1.x - this.mouse.x > -this.particles.d_radius
                    && p1.y - this.mouse.y > -this.particles.d_radius) {

                    // Starts a new path by emptying the list of sub-paths.
                    // Call this method when you want to create a new path.
                    this.ctx.beginPath();

                    // set color or style to use for the lines around shapes. Default #000 (black).
                    this.ctx.strokeStyle = this.getStyleNums(p1, p2);

                    // Moves the starting point of a new sub-path to the (x, y) coordinates.
                    this.ctx.moveTo(p1.x, p1.y);

                    // Connects the last point in the subpath to the x, y coordinates with a straight line.
                    this.ctx.lineTo(p2.x, p2.y);

                    // Strokes the subpaths with the current stroke style.
                    this.ctx.stroke();

                    // Causes the point of the pen to move back to the start of the current sub-path.
                    // It tries to draw a straight line from the current point to the start. If the
                    // shape has already been closed or has only one point, this function does nothing.
                    this.ctx.closePath();
                }
            }
        }
    }

    drawAllDots() {
        for (let e = 0; e < this.particles.noOfDots; e++) {
            const t = this.particles.array[e];
            // t.draw();

            this.ctx.beginPath();
            this.ctx.fillStyle = t.color.style;

            // draw dots
            this.ctx.arc(t.x, t.y, t.radius, 0, 2 * Math.PI, false);

            // draw numbers
            // this.ctx.fillText(t.rotate, t.x, t.y);
            // this.ctx.rotate(t.rotate * Math.PI / 180);
            // this.ctx.font = '20px 'Roboto Condensed'';

            // this.ctx.fillStyle = 'black';

            // this.ctx.save();
            // this.ctx.translate(t.x, t.y);
            // this.ctx.rotate(-Math.PI / 0);

            // this.ctx.textAlign = 'center';
            // this.ctx.fillText(t.text, 0, 15 / 2);

            // this.ctx.restore();

            // text center point
            // this.ctx.fillStyle = 'red';
            // this.ctx.fillRect(t.x, t.y, 2, 2);

            this.ctx.fill();

        }
    }

    start() {
        // erase any previously drawn content
        // The CanvasRenderingContext2D.clearRect() method of
        // the Canvas 2D API sets all pixels in the rectangle
        // defined by starting point (x, y) and size (width, height)
        // to transparent black, erasing any previously drawn content.
        this.ctx.clearRect(0, 0, this.dotFrameWidth, this.dotFrameHeight);
        // this.ctx.fillStyle = 'rgba(36,54,68,1)'; // background color
        // this.ctx.fillRect(0, 0, this.width, this.height);

        // update dot positions
        this.updateDots();

        // draw lines between dots
        this.drawLines();

        // draw all dots to canvas
        this.drawAllDots();

        // loop
        if (this.raf) {
            this.raf(this.start.bind(this));
        }

    }

    checkRAFCompatibility(): Window['requestAnimationFrame'] {

        // check if window.requestAnimationFrame is compatible with browser for better performance
        // otherwise use setInterval for better compatibility (less performance)
        // https://stackoverflow.com/questions/38709923/why-is-requestanimationframe-better-than-setinterval-or-settimeout

        const w = window as any;

        return w.requestAnimationFrame ||
            w.webkitRequestAnimationFrame ||
            w.mozRequestAnimationFrame ||
            w.oRequestAnimationFrame ||
            w.msRequestAnimationFrame || null;

        // to force setInterval()
        // return null;
    }
}
