
export enum ActionCurrency{
    USD = 1,
    AUD = 2,
    CHN = 3,
    yearly = 12
}

export enum ActionFrequency{
    daily = 1,
    weekly = 7,
    monthly = 30,
    yearly = 12
}

export enum ActionCategory{
    undefined = -1,
    car = 1,
    home = 2,
    work = 3,
    personal = 4
}

export enum ActionStatus{
    pending = 1,
    onGoing = 2,
    predicted = 3,
    completed = 4
}

export enum ActionType{
    undefined = -1,
    cach = 1,
    credit = 2,
    saving = 3,
    cypto = 4
}


export enum CellsType {
    None = 0,
    LiPo = 1,
    LiFe = 2,
    LiIon = 3,
  }