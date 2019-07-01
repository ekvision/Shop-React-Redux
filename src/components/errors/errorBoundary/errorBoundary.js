import React, {Component} from 'react'
import s from './errorBoundary.module.scss'


class ErrorBoundry extends Component {

  state = {
    hasError: false,
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    })
  }

  render() {
    if(this.state.hasError){
      return (
        <div className={s.errorMessage}>Something went wrong</div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
