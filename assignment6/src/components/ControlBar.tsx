import * as React from 'react'
import Moment from 'react-moment'
import { Link } from "react-router-dom"

interface Props {
  setDate: Function
}

interface State {
  date: Date
}

export default class ControlBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  increment = () => {
    let {date} = this.state
    this.setState({date: new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1))}, () => this.props.setDate(this.state.date))
  }

  decrement = () => {
    let {date} = this.state
    this.setState({date: new Date(date.getFullYear(), date.getMonth(), (date.getDate() - 1))}, () => this.props.setDate(this.state.date))
  }

  today = () => {
    this.setState({date: new Date()}, () => this.props.setDate(this.state.date))
  }

  render() {
    return (
      <div className="control-bar">
        <div className="left-pannel">
          <button className="control" onClick={this.today}>Today</button>
        </div>
        <div className="date">
          <button className="control" onClick={this.decrement}>{'<'}</button>
          <Moment date={this.state.date} format="DD MMM, YYYY"/>
          <button className="control" onClick={this.increment}>{'>'}</button>
        </div>
        <div className="right-pannel">
          <Link to={`/addEdit/${this.state.date.toString()}`}><button className="control">Add</button></Link>
        </div>
      </div>
    )
  }
}