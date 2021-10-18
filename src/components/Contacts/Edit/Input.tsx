import styles from '../../../assets/styles/Contacts/Edit/Input.module.scss'

interface InputValues {
    id: string;
    value?: string;
    type: string;
    label: string;
    name: string;
    register: any;
    accepEdit?: string;
    defaultValue?: string;
}


export const Input = ({ id, type, label, name, register, accepEdit, defaultValue }: InputValues): JSX.Element => {
    return (
        <>
            <label htmlFor={id} className={styles.input__label}>{label}</label>
            <input type={type} defaultValue={defaultValue} id={id} accept={accepEdit} className={styles.input} {...register(name)} />

        </>
    )
}