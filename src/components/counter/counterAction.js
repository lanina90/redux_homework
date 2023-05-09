
export const INC = 'INC'
export const DEC = 'DEC'
export const RAND = 'RAND'
export const RESET = 'RESET'

export const incActionCreator = () => {
  return {
    type: INC
  }
}

export const decActionCreator = () => {
  return {
    type: DEC
  }
}

export const randActionCreator = (v) => {
  return {
    type: RAND,
    payload: v
  }
}

export const resetActionCreator = () => {
  return {
    type: RESET
  }
}