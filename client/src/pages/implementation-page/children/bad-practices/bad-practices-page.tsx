import React, {
  Component,
  memo,
  PureComponent,
  useCallback,
  useState,
} from 'react';
import { Page } from '@/components';

type Props = {
    value: string
};

const ChildMemoComponent = memo(({ value }: Props) => {
    console.log('=== render memoChild ===');

    return <p>memoChild: {value}</p>;
});

const ChildComponent = ({ value }: Props) => {
    console.log('=== render child ===');

    return <p>child: {value}</p>;
};

class ClassPureComponent extends PureComponent<Props> {
    render() {
        console.log('=== render PureClass ===');
        return <p>PureClass: {this.props.value}</p>;
    }
}

class ClassComponent extends Component<Props> {
    render() {
        console.log('=== render class ===');
        return <p>class: {this.props.value}</p>;
    }
}

type ParentProps = {
    counterValue: number;
}

const ParentMemoComponent = memo(({ counterValue }: ParentProps) => {

    let memoChild = <ChildMemoComponent value="one"/>;
    let child = <ChildComponent value="one" />;
    let pureClassChild = <ClassPureComponent value="one"/>;
    let classChild = <ClassComponent value="one" />;

    if (counterValue < 3) {
        memoChild = <ChildMemoComponent value="two"/>;
        child = <ChildComponent value="two" />;
        pureClassChild = <ClassPureComponent value="two"/>;
        classChild = <ClassComponent value="two" />;
    }

    console.log('=== render memo parent ===');

    return (
        <div>
            <h2>memo parent: {counterValue}</h2>
            <div>{memoChild}</div>
            <div>{child}</div>
            <div>{pureClassChild}</div>
            <div>{classChild}</div>
        </div>
    );
});

const ParentComponent = ({ counterValue }: ParentProps) => {

    let memoChild = <ChildMemoComponent value="one"/>;
    let child = <ChildComponent value="one" />;
    let pureClassChild = <ClassPureComponent value="one"/>;
    let classChild = <ClassComponent value="one" />;

    if (counterValue < 3) {
        memoChild = <ChildMemoComponent value="two"/>;
        child = <ChildComponent value="two" />;
        pureClassChild = <ClassPureComponent value="two"/>;
        classChild = <ClassComponent value="two" />;
    }

    console.log('=== render parent ===');

    return (
      <div>
          <h2>parent: {counterValue}</h2>
          <div>{memoChild}</div>
          <div>{child}</div>
          <div>{pureClassChild}</div>
          <div>{classChild}</div>
      </div>
    );
};

const Parent2MemoComponent = memo(({ counterValue }: ParentProps) => {

    console.log('=== render memo parent 2 ===');

    const oneOrTwo = counterValue < 3 ? 'two' : 'one';

    return (
      <div>
          <h2>memo parent 2: {counterValue}</h2>
          <div>
              <ChildMemoComponent value={oneOrTwo}/>
          </div>
          <div>
              <ChildComponent value={oneOrTwo} />
          </div>
          <div>
              <ClassPureComponent value={oneOrTwo}/>
          </div>
          <div>
              <ClassComponent value={oneOrTwo} />
          </div>
      </div>
    );
});

export const BadPracticesPage = () => {
    const [counterValue, setCounterValue] = useState(0);

    const handleClick = useCallback(() => {
        setCounterValue(counterValue + 1);
    }, [counterValue]);

    return (
        <Page
          headTitle="Bad-practices"
          title="Bad-practices"
        >
            <div>
                <button onClick={handleClick} type="button">increment</button>
            </div>
            <br/>
            <br/>
            <ParentMemoComponent counterValue={counterValue}/>
            <br/>
            <br/>
            <ParentComponent counterValue={counterValue}/>
            <br/>
            <br/>
            <Parent2MemoComponent counterValue={counterValue}/>
        </Page>
    );
};

export default memo(BadPracticesPage);
