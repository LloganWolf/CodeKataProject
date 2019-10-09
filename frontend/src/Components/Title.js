import React, {Fragment} from 'react';

const Title = (props) => {
    return(
        <Fragment>
            <h2>{ props.titre }</h2>
            <p className="big grey">{ props.accroche }</p>
        </Fragment>
    )
}

export default Title