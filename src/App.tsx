import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import NameForm from './components/NameForm';
import { NameList } from './components/NameList';

export default class App extends Component<IProps, IState>
{
    public state: IState = 
    {
        names: ['이두영', '심수연']
    }

    public render(): JSX.Element 
    {
        const {names} = this.state;

        return (
            <div className="App">
                <Counter />
                <hr/>
                <h1>이름 목록</h1>
                <NameForm onInsert={this.onInsert.bind(this)} />
                <NameList names={names} />
            </div>
        );
    }

    private onInsert(name: string): void
    {
        // 방법1
        this.setState(({names}) => ({names: names.concat(name)}));

        // 방법2
        // this.setState(({names}) =>
        // {
        //     return {names: names.concat(name)}
        // });

        // 방법3
        // this.setState({names: this.state.names.concat(name)});
    }
}

interface IState
{
    names: string[];
}

interface IProps
{
    
}