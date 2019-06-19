import React, { Component } from 'react'
import {
    Container, Row, Col
} from 'reactstrap'
import MessageItem from '../../components/messageItem'
import FormMessage from './formMessage'
import MessageObj from '../../utilities/message'
import './chat.css'
const Msg = new MessageObj()

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            message: Msg,
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.updateMessages = this.updateMessages.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({
            message: {
                ...this.state.message,
                [e.target.id]: e.target.value
            }
        })
    }

    sendMessage(e) {
        e.preventDefault()
        const _this = this
        let { message } = this.state
        Msg.saveMessage(message).then(()=>{
            _this.setState({
                message: new MessageObj()
            })
            //_this.loadMessages()
        })
    }

    loadMessages(){
        const _this = this
        Msg.getMessages().then(messages => {
            _this.setState({ messages })
        })
    }

    updateMessages(messages){
        this.setState({ messages })
    }

    componentWillMount() {
        //this.loadMessages()
        const _this = this
        Msg.getMessagesRealtime(_this.updateMessages)
    }

    render() {
        return (
            <Container>
                <div className="messageList">
                {
                    this.state.messages.map(msg => <MessageItem key={msg.id} message={msg} />)
                }
                </div>
                <Row>
                    <Col>
                        <FormMessage
                            className='formChat'
                            onChange={this.onChange}
                            message={this.state.message}
                            sendMessage={this.sendMessage}
                        />
                    </Col>
                </Row>

            </Container>
        )
    }
}