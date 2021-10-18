import styles from '../../../assets/styles/Contacts/Add/Select.module.scss'

interface SelectProps {
    selectName: string;
    id: string;
    register: any;
    required: boolean;
}

export const Select = ({ selectName, id, register, required }: SelectProps): JSX.Element => {
    return (
        <>
            <label htmlFor={id} className={styles.select__label}>Gender</label>
            <select id={id} name={selectName} {...register(selectName, { required })} className={styles.select}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </>
    )
}