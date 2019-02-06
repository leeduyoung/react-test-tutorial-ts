import React, { Component } from 'react';

export default class NameForm extends Component<IProps, IState>
{
    public static defaultProps =
    {
        onSubmit: () => console.warn('onSubmit not defined')
    };

    public state: IState =
    {
        name: ''
    };

    public render(): JSX.Element
    {
        const {name} = this.state;

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>이름</label>
                <input type="text" value={name} onChange={this.onChangeHandler.bind(this)} />
                <button type="submit">등록</button>
            </form>
        )
    }

    private onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void
    {
        this.setState({
            name: event.target.value
        });
    }

    private onSubmit(event: React.FormEvent): void
    {
        const {name} = this.state;
        const {onInsert} = this.props;

        // list에 이름 넣기
        onInsert(name);

        // name 값 초기화
        this.setState({
            name: ''
        });

        // submit 하면 기본적으로 페이지가 새로고쳐지게 되는데 이를 방지한다.
        event.preventDefault();
    }
}

interface IState
{
    name: string;
}

interface IProps
{
    onInsert: (name: string) => void;
}