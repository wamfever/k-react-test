import styles from '../../assets/styles/Contacts/HeaderTitle.module.scss'

type HeaderTitleProps = {
    title: string;
}

export const HeaderTitle = ({ title }: HeaderTitleProps): JSX.Element => <h1 className={styles.header_title}>{title}</h1>
