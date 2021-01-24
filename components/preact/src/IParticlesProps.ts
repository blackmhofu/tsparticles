import type { RefObject } from "react";
import type { ISourceOptions, Container } from "tsparticles-core";
import type { Main } from "tsparticles-core";

export interface IParticlesProps {
    id?: string;
    width?: string;
    height?: string;
    options?: ISourceOptions;
    url?: string;
    params?: ISourceOptions;
    style?: React.JSX.CSSProperties;
    className?: string;
    canvasClassName?: string;
    container?: RefObject<Container>;
    init?: (tsParticles: Main) => void;
}
