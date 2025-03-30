import { PhisicEntity } from "./productEntity.model";

export interface ProductResult extends PhisicEntity {
    hoverTime: number; // Time in hours
    maxSpeed: number;  // Max speed in m/s
    maxPayload: number; // Max rising speed in m/s
}