import PropTypes from 'prop-types'
function Main(props){
    return (
        <>
        {props.display?<div>
            efuef
            ufer
        </div>:""}
        </>
    )    
}


Main.propTypes = {
    display : PropTypes.bool.isRequired
}
Main.defaultProps= {
    display : true
}

export default Main;