import css from './button.module.css'

function Button({ name, className }) {

    return (
        <div>
            <button className={className}>{name}</button>
        </div>
    );
}

export default Button;
