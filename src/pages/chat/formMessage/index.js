import React from 'react'
import {
    Button, Form, FormGroup, Input,
    InputGroup, InputGroupAddon,
} from 'reactstrap'


export default function formMessage(props) {
    return (
        <React.Fragment>
            <Form onSubmit={props.sendMessage} className="formChat">
                <FormGroup>
                    <InputGroup>
                        <Input onChange={props.onChange} value={props.message.Message} id="Message" placeholder="Write a message.." />
                        <InputGroupAddon addonType="append">
                            <Button color="success">Send</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        </React.Fragment>

    )
}