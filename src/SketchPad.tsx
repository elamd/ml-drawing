/* eslint-disable react-hooks/exhaustive-deps */
import {useRef, useEffect} from "react";
import PathShape from "./PathShape";

const SketchPad = (props: {className: any, width: string, height: string, children: any}) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const paths: PathShape[][] = [];

    let isDrawing = false;

    useEffect( () => {

        if(!canvasRef.current)
            return;

        canvasRef.current.onmousedown = (evt) => {
            const mouse: number[] | undefined = getMouse(evt);
            if(mouse) {
                paths.push([new PathShape(mouse)]);
                isDrawing = true;
            }
            
        }

        canvasRef.current.onmousemove = (evt) => {
            if(!isDrawing) return;
            const mouse: number[]  | undefined = getMouse(evt);
            if(mouse)
                paths[paths.length-1].push(new PathShape(mouse));
            redraw();
        }

        canvasRef.current.onmouseup = (evt) => {
            isDrawing = false;
        }

    },[canvasRef]);

    const redraw = () => {
        const ctx: CanvasRenderingContext2D | undefined | null = canvasRef.current?.getContext("2d");
        ctx?.clearRect(0,0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        const drawPath = {
            path: (context: CanvasRenderingContext2D, drawPath: PathShape[], color="black") => {
                context.strokeStyle = color;
                context.lineWidth = 3;
                context.beginPath();
                context.moveTo(drawPath[0].path[0][0], drawPath[0].path[0][1]);
                for(let i = 1; i < drawPath.length; i++){
                    context.lineTo(drawPath[i].path[0][0], drawPath[i].path[0][1]);
                }
                context.lineCap="round"
                context.stroke();
            }
        };
        for(let i = 0; i < paths.length; i++){
            drawPath.path(ctx!, paths[i]);
        }
    }

    const getMouse = (evt: MouseEvent) => {
        const rect: DOMRect | undefined = canvasRef.current?.getBoundingClientRect();
        if(rect)
            return [evt.clientX - rect.left, evt.clientY - rect.top];
        else 
            return undefined;
    }

    return (
        <>
            <canvas ref={canvasRef} className={props.className} width={props.width} height={props.height} />
        </>
    );
}

export default SketchPad;