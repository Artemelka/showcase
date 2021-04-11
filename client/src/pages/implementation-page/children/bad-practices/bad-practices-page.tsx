import React, {PureComponent, memo, useCallback, useState} from 'react';
import { Page } from '../../../../components';

type Props = {
    value: string
};

const ChildComponent = memo(({ value }: Props) => {
    console.log('=== render child ===');

    return <p>value: {value}</p>;
});

class ChildClassComponent extends PureComponent<Props> {
    render() {
        console.log('=== render class child ===');
        return <p>value: {this.props.value}</p>;
    }
}

type State = {
    counterValue: number;
}

const ParentComponent = memo(() => {
    const [counterValue, setCounterValue] = useState(0);

    let classChild = <ChildClassComponent value="one" />;

    if (counterValue < 10) {
        classChild = <ChildClassComponent value="two" />;
    }

    let child = <ChildComponent value="one" />

    if (counterValue < 10) {
        child = <ChildComponent value="two" />
    }

    const handleClick = useCallback(() => {
        setCounterValue(counterValue + 1);
    }, [counterValue]);

    console.log('=== render parent ===');

    return (
        <div>
            <h2>Counter: {counterValue}</h2>
            <div>
                <button onClick={handleClick} type="button">increment</button>
            </div>
            <div>{classChild}</div>
            <div>{child}</div>
        </div>
    );
});

const BadPracticesPage = () => {
    return (
        <Page title="Bad-practices">
            <ParentComponent/>
        </Page>
    );
}

export default BadPracticesPage;
