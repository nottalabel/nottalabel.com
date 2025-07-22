"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Animation() {
    const canvasRef = useRef(null);
    const imgRef = useRef(null);
    const [ ctx, setCtx ] = useState(null);

    const flag = {
        x: 150 - 32, 
        y: 150 - 22, 
        dx: 0.8, dy: 0.8, 
        w: 64, h: 44
    };

    useEffect(() => {
        setCtx(canvasRef.current.getContext("2d"));
    }, []);

    const animate = () => {
        if (!ctx) return;
        ctx.fillStyle = "hsl(0deg 80 0)";
        ctx.fillRect(0, 0, 300, 300);
        console.log("FLAG: ", flag);
        flag.x += flag.dx;
        flag.y += flag.dy;
        if (flag.x > 300 - flag.w || flag.x < 0) flag.dx *= -1;
        if (flag.y > 300 - flag.h || flag.y < 0) flag.dy *= -1;
        ctx.fillStyle = flag.color;
        ctx.drawImage(imgRef.current, flag.x, flag.y, flag.w, flag.h);
        window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(animate);

    return (
        <>
          <Image className="invisible" ref={imgRef} src="/notta_flag.png" width={64} height={64} alt="flag" />
          <canvas id="visualizer" ref={canvasRef} width={300} height={300}></canvas>
        </>
    );

}
