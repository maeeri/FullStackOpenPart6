import { connect, useSelector } from 'react-redux'

const Notification = (props) => {
  // const notification = useSelector(state => state.notification)
  const style = props.notification === '' 
  ? {display: 'none'} 
  : {
    display: 'block',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { notification: state.notification }
}

const ConnectedNotification = connect(mapStateToProps, null)(Notification)
export default ConnectedNotification