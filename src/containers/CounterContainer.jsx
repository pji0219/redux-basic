import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // 리덕스 상태 조회
  // 상태를 조회할때 마다 객체로 반환되어 최적화가 안됨
  // const { number, diff } = useSelector(state => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff
  // }));

  // 객체로 리턴 안하고 useSelector를 따로 사용함으로써 최적화
  const number = useSelector(state => state.counter.number);
  const diff = useSelector(state => state.counter.diff);

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </div>
  );
}

export default CounterContainer;