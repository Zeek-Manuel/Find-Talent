function RemCalculator<S extends string, N extends number>(dimension: N): S {
    const REM: N = 16 as N;

    return `${dimension / REM}rem` as S;
}

export default RemCalculator;