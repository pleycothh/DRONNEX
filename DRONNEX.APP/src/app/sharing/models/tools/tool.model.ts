export interface ToolEntity {
    id: string;
    name: string;
    valueOne: number;
    valueTwo: number;
    operator: ToolOperator;
}

export interface ToolResult {
    id: string;
    value: number;
}

export interface ToolRow {
    toolEntity: ToolEntity;
    toolResult: ToolResult;
}


export enum ToolOperator {
    plus = 1,
    minus = 2,
    multiply = 3,
    divide = 4 
}

export enum ResponseCode {
    error = -1, 
    noResult = 0,
    success = 2,
    timeout = 3
}