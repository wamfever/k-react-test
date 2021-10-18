import styles from '../../../assets/styles/Contacts/Edit/Select.module.scss'


type SelectProps = {
    selectName: string;
    label: string;
    id: string;
    selectDefault: any;
    register: any;
}

export const Select = (({ selectName, label, register, id, selectDefault }: SelectProps): JSX.Element => (
    <>
        <label htmlFor={id} className={styles.select__label}>{label}</label>
        <select id={id} name={selectName} defaultValue={selectDefault} {...register(selectName)} className={styles.select}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
    </>
));