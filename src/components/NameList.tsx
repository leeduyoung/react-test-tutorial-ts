import React from 'react';

export class NameList extends React.Component<IProps, IState>
{
    public static defaultProps: IProps = 
    {
        names: []
    };

    public render(): JSX.Element
    {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }

    private renderList(): JSX.Element[]
    {
        const {names} = this.props;
        const nameList = names.map((name, i) =>
        {
            return <li key={i}>{name}</li>;
        });
        return nameList;
    }
}

interface IState
{

}

interface IProps
{
    names: string[]
}