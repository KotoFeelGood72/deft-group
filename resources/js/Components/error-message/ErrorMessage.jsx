import img from '../../../images/error-message.svg';

const ErrorMessage = () => {
    return (
        <img src={img} style={{ display: 'block', width: '250px', height: '150px', objectFit: 'contain', margin: '0 auto' }} alt="error"/>
    )
}

export default ErrorMessage;
