import styles from '../../../assets/styles/Contacts/Add/Input.module.scss'

interface InputValues {
    id: string;
    value?: string;
    type: string;
    label: string;
    name: string;
    register: any;
    required: boolean;
    accept?: string;
    defaultValue?: string;
}

export const Input = ({ id, value, type, label, name, register, required, accept, defaultValue }: InputValues): JSX.Element => {
    return (
        <>
            <label htmlFor={id} className={styles.input__label}>{label}</label>
            <input type={type} value={value} defaultValue={defaultValue} id={id} accept={accept} className={styles.input} {...register(name, { required })} />

        </>
    )
}
