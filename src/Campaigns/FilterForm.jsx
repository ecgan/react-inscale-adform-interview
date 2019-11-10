import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, DatePicker, Row, Col } from 'antd'

const FilterForm = (props) => {
  const { form } = props
  const { getFieldDecorator } = form

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
                <DatePicker />
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
                <DatePicker />
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
