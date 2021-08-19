// 타입, 다른 모듈의 타입과 중복 되지 않기 위해 파일 이름인 counter를 접두사로 써줌
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 리듀서
const initialState = {
  number: 0,
  diff: 1
};

export default function counter(state = initialState, action) {
  switch(action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };

    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }

    default:
      return state;
  }
}