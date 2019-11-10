import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, DatePicker, Row, Col } from 'antd'

import dateFormat from '../_shared/dateFormat'

const disableStartDate = (endDate) => (current) => {
  if (!endDate || !current) {
    return false
  }

  return current > endDate
}

const disableEndDate = (startDate) => (current) => {
  if (!startDate || !current) {
    return false
  }

  return current < startDate
}

const FilterForm = (props) => {
  const { form } = props
  const { getFieldDecorator, getFieldValue } = form

  return (
    <Form>
      <Row
        type='flex'
        gutter={8}
      >
        <Col
          xs={24}
          md={12}
        >
          <Form.Item
            label='Name'
          >
            {
              getFieldDecorator('name')(
                <Input
                  autoComplete='off'
                />
              )
            }
          </Form.Item>
        </Col>
        <Col
          xs={12}
          md={6}
        >
          <Form.Item
            label='Start Date'
          >
            {
              getFieldDecorator('startDate')(
                <DatePicker
                  disabledDate={disableStartDate(getFieldValue('endDate'))}
                  format={dateFormat}
                  style={{ width: '100%' }}
                />
              )
            }
          </Form.Item>
        </Col>
        <Col
          xs={12}
          md={6}
        >
          <Form.Item
            label='End Date'
          >
            {
              getFieldDecorator('endDate')(
                <DatePicker
                  disabledDate={disableEndDate(getFieldValue('startDate'))}
                  format={dateFormat}
                  style={{ width: '100%' }}
                />
              )
            }
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

FilterForm.propTypes = {
  form: PropTypes.object
}

export default FilterForm
