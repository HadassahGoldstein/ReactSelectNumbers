import React from 'react';

class NumberAdder extends React.Component {

    render() {
        const { number, isSelected, isLocked, selectClick, unselectClick } = this.props;
        return (
            <tr>
                <td>{number}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger' : 'primary'}`}
                        onClick={isSelected ? unselectClick : selectClick } disabled={isLocked} >{isSelected ? 'Remove from selected' : 'Select'}</button>
                </td>
            </tr>)
    }
}
export default NumberAdder;