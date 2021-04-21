import React from 'react';
import NumberAdder from './NumberAdder';
import SelectedNumbers from './SelectedNumbers';
import { produce } from 'immer';

class NumberPage extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }
    onAddClick = () => {
        var num = Math.floor(Math.random() * 1000);
        const nextState = produce(this.state, draftState => {
            draftState.numbers.push(num);
        });
        this.setState(nextState);
    }
    onSelectClick = (n) => {
        const nextState = produce(this.state, draftState => {
            draftState.selectedNumbers.push(n);
        })
        this.setState(nextState);
    }
    onUnselectClick = (n) => {

        const filtered = this.state.selectedNumbers.filter(num => num !== n);

        this.setState({ selectedNumbers: filtered });
    }
    onLockClick = (n) => {        
        const nextState = produce(this.state, draftState => {
            draftState.lockedNumbers.push(n);
        })
        this.setState(nextState);
    }
    onUnlockClick = (n) => {
        
        const filtered = this.state.lockedNumbers.filter(num => num !== n);
        this.setState({ lockedNumbers: filtered });
    }
    GenerateSelectedList = () => {
        if (this.state.selectedNumbers.length === 0) {
            return null;
        }
        return (
            <div className='jumbotron row'>

                <div className="col-md-6 col-md-offset-3">
                    <h3>Selected Numbers</h3>
                    <ul className="list-group">
                        {this.state.selectedNumbers.map(n => {
                            return (
                                <SelectedNumbers
                                    number={n}
                                    isLocked={this.state.lockedNumbers.includes(n)}
                                    lockClick={() => this.onLockClick(n)}
                                    unlockClick={() => this.onUnlockClick(n)}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <button className="btn btn-success btn-block" onClick={this.onAddClick} > Add</button>
                </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map(n => {
                                return (
                                    <NumberAdder number={n}
                                        isSelected={this.state.selectedNumbers.includes(n)}
                                        isLocked={this.state.lockedNumbers.includes(n)}
                                        selectClick={() => this.onSelectClick(n)}
                                        unselectClick={() => this.onUnselectClick(n)} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {this.GenerateSelectedList()}
            </div>
        )
    }
}
export default NumberPage;