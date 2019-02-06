import * as React from 'react';

export default class Counter extends React.Component
{
    public state: State =
    {
        value: 2
    };

    public render(): JSX.Element
    {
        let value: number = this.state.value;

        return (
            <div>
                <h1 id="title">카운터</h1>
                <h2>{value}</h2>
                <button onClick={this.onIncrease.bind(this)}>+</button>
                <button onClick={this.onDecrease.bind(this)}>-</button>
            </div>
        )
    }

    private onIncrease(): void
    {
        this.setState({
            value: this.state.value + 1
        });
    }

    private onDecrease(): void
    {
        this.setState({
            value: this.state.value - 1
        });
    }
}

interface State
{
    value: number;
}