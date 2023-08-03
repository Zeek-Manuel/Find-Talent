import RemCalculator from "../../hooks/useRemCalculator";

interface IconAttributes<S extends string, N extends number> {
    width: N;
    height: N;
    fill?: S;
}

function CloseIcon({height, width, fill}: IconAttributes<string, number>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width={RemCalculator<string, number>(width)} height={RemCalculator<string, number>(height)} fill={fill}>
        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
    </svg>
  )
}

export default CloseIcon;