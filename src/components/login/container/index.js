import React from 'react'
import {
    Form, FormGroup,
    InputGroup, InputGroupAddon, InputGroupText,
    Button, Input, Alert, Modal, ModalBody, ModalHeader
} from 'reactstrap'
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/fa/user'
import { ic_https } from 'react-icons-kit/md/ic_https'
import { eye } from 'react-icons-kit/fa/eye'
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
import '../login.css'

export default function loginContainer(props){

    return(
        <React.Fragment>
                <Modal isOpen={props.modalLogin} toggle={props.toggleModalLogin} className={props.className}>
                    <ModalHeader toggle={props.toggleModalLogin}>Ingresar al sistema</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={props.onLogin}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Icon size={20} icon={user} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="email" onChange={props.onInputChange} value={props.email} name="email" id="email" placeholder="usuario@empresa.com" required />
                                </InputGroup>
                            </FormGroup>
                            {' '}
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Icon size={20} icon={ic_https} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type={props.showPassword ? "text" : "password"} onChange={props.onInputChange} value={props.password} name="password" id="password" placeholder="Contraseña" required />
                                    <InputGroupAddon addonType="append">
                                        <Button onClick={props.toggleShowPass} >
                                            {
                                                props.showPassword ?
                                                    <Icon size={20} icon={eye} />
                                                    :
                                                    <Icon size={20} icon={eyeSlash} />
                                            }
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                            {
                                props.messageLoginError && <Alert color="danger">
                                    {props.messageLoginError}
                                    <a href="#" onClick={props.ontoggleErrorDetalle} className="verMasError float-right">{props.toggleErrorDetalle ? "Ocultar" : "Ver más"}</a>
                                    {props.toggleErrorDetalle && props.messageLoginErrorDetails}
                                </Alert>
                            }
                            {' '}
                            <FormGroup>
                                <InputGroup>
                                    <Button className='btn-rojo' block disabled={props.loading} >
                                        {
                                            !props.loading ? "Ingresar" : "Iniciando sesión..."
                                        }
                                    </Button>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
    )
}