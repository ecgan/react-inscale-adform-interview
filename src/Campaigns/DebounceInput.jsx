import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import debounce from 'lodash/debounce'

const DebounceInput = class extends Component {
  constructor (props) {
    super(props)

    this.handleChange = debounce(this.handleChange, 300)
  }

  handleChange = (value) => {
    const { onChange = () => {} } = this.props
    onChange(value)
  }

  render () {
    const { value, ...rest } = this.props

    return (
      <Input
        {...rest}
        onChange={(e) => { this.handleChange(e.target.value) }}
      />
    )
  }
}

DebounceInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default DebounceInput
