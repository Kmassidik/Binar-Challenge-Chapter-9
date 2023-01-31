import React, { ChangeEvent, useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
    MDBInput,
} from 'mdb-react-ui-kit';

const Profile = () => {
    const [varyingState, setVaryingState] = useState('');
    const [varyingModal, setVaryingModal] = useState(false);
    const [varyingRecipient, setVaryingRecipient] = useState('');
    const [varyingMessage, setVaryingMessage] = useState('');

    const onChangeRecipient = (event: ChangeEvent<HTMLInputElement>) => {
        setVaryingRecipient(event.target.value);
    };

    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setVaryingMessage(event.target.value);
    };

    return (
        <>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn className="mx-2">Follow</MDBBtn>
                                    <MDBBtn className="mx-2" outline className="ms-1">Message</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <h5 className='my-2 text-center'>Social Media Link</h5>
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fas icon="globe fa-lg text-warning" />
                                        <MDBCardText>https://mdbootstrap.com</MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                                <MDBRow className="float-right my-3 mx-2 ">
                                    <MDBCol sm="3">
                                        <MDBBtn
                                            onClick={() => {
                                                setVaryingState('@mdo');
                                                setVaryingModal(!varyingModal);
                                                setVaryingRecipient('@mdo');
                                            }}
                                        >
                                            Edit
                                        </MDBBtn>

                                        <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
                                            <MDBModalDialog>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle>New message to {varyingState}</MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(!varyingModal)}></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        <form>
                                                            <div className='mb-3'>
                                                                {varyingModal && (
                                                                    <MDBInput
                                                                        value={varyingRecipient}
                                                                        onChange={onChangeRecipient}
                                                                        labelClass='col-form-label'
                                                                        label='Username'
                                                                    />
                                                                )}
                                                            </div>
                                                        </form>
                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                        <MDBBtn color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                                                            Close
                                                        </MDBBtn>
                                                        <MDBBtn>Save changes</MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>

                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">example@example.com</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>City</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Atlantis</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Bio</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis libero ut neque aliquet imperdiet. Nullam eget convallis magna, et viverra libero. In placerat ante ac congue interdum. Suspendisse porta justo in leo placerat, vel pharetra nunc pellentesque. Fusce eleifend elit in orci dictum pulvinar. In nec mauris vitae elit finibus dictum. Nullam non dolor a nulla molestie malesuada. Sed ac pellentesque metus.</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <br></br>

                                <MDBRow className="float-right">
                                    <MDBCol sm="3">
                                        <MDBBtn
                                            onClick={() => {
                                                setVaryingState('@mdo');
                                                setVaryingModal(!varyingModal);
                                                setVaryingRecipient('@mdo');
                                            }}
                                        >
                                            Edit
                                        </MDBBtn>

                                        <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
                                            <MDBModalDialog>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle>New message to {varyingState}</MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(!varyingModal)}></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        <form>
                                                            <div className='mb-3'>
                                                                {varyingModal && (
                                                                    <MDBInput
                                                                        value={varyingRecipient}
                                                                        onChange={onChangeRecipient}
                                                                        labelClass='col-form-label'
                                                                        label='Username'
                                                                    />
                                                                )}
                                                            </div>
                                                            <div className='mb-3'>
                                                                {varyingModal && (
                                                                    <MDBInput
                                                                        value={varyingRecipient}
                                                                        onChange={onChangeRecipient}
                                                                        labelClass='col-form-label'
                                                                        label='Email:'
                                                                    />
                                                                )}
                                                            </div>
                                                            <div className='mb-3'>
                                                                {varyingModal && (
                                                                    <MDBTextArea
                                                                        value={varyingMessage}
                                                                        onChange={onChangeMessage}
                                                                        labelClass='col-form-label'
                                                                        label='Bio:'
                                                                    />
                                                                )}
                                                            </div>
                                                            <div className='mb-3'>
                                                                {varyingModal && (
                                                                    <MDBInput
                                                                        value={varyingRecipient}
                                                                        onChange={onChangeRecipient}
                                                                        labelClass='col-form-label'
                                                                        label='City:'
                                                                    />
                                                                )}
                                                            </div>
                                                        </form>
                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                        <MDBBtn color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                                                            Close
                                                        </MDBBtn>
                                                        <MDBBtn>Save changes</MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default Profile;
