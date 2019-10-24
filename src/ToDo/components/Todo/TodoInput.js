import React, {Component} from 'react'
import { Button, Input,  Row, Col } from 'antd';
import "antd/dist/antd.css";

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    return (
        <div>
          <Row>
            <Col span={12}>
              <Input value={this.state.inputValue} onChange={this.handleInputChange} />
              <Button type="primary" onClick={this.dispatch}>add</Button>
            </Col>
          </Row>
        </div>

    )
  }
}
