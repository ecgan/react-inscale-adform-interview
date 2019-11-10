import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, DatePicker, Row, Col } from 'antd'

import dateFormat from '../_shared/dateFormat';

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
      <Form.Item
        label='Name'
      >
        {
          getFieldDecorator('name')(
            <Input />
          )
        }
      </Form.Item>
      <Row
        type='flex'
        gutter={8}
      >
        <Col span={12}>
          <Form.Item
            label='Start Date'
          >
            {
              getFieldDecorator('startDate')(
                <DatePicker
                  disabledDate={disableStartDate(getFieldValue('endDate'))}
                  format={dateFormat}
                />
              )
            }
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label='End Date'
          >
            {
              getFieldDecorator('endDate')(
                <DatePicker
                  disabledDate={disableEndDate(getFieldValue('startDate'))}
                  format={dateFormat}
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
