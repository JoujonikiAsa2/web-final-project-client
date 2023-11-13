const Button = ({borderColor,textColor,btnText }) => {
    return (
        <div>
            <button className={`btn btn-outline border-0 border-b-4  border-${borderColor} text-${textColor} my-4`}>{btnText}</button>
        </div>
    );
};

export default Button;