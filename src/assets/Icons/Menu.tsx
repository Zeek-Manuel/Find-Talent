import { MouseEventHandler } from "react";

interface IconAttributes<S extends string, N extends number> {
    width: N;
    height: N;
    fill?: S;
    onClick?: MouseEventHandler;
}

function MenuIcon({height, width, fill, onClick}: IconAttributes<string, number>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width={width + "px"} height={height + "px"}
     fill={fill} onClick={(onClick)}>
        <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
    </svg>
  )
}

export default MenuIcon;