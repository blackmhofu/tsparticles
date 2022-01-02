import type { PolygonMaskMoveType } from "../../Enums";

/**
 * @category Polygon Mask Plugin
 */
export interface IMove {
    radius: number;
    type: PolygonMaskMoveType | keyof typeof PolygonMaskMoveType;
}
