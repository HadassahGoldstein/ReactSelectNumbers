import React from 'react';

class SelectedNumbers extends React.Component {
    render() {
        const { number, isLocked, lockClick, unlockClick } = this.props;
       
        return (
            <li className='list-group-item'>{number}  <button className="ml-3 btn btn-primary" onClick={isLocked ? unlockClick : lockClick}>{isLocked ? 'Unlock' : 'Lock'}</button></li>
        )
    }
}
export default SelectedNumbers;