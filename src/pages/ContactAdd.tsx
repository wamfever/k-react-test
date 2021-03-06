import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import DexieDatabase from "../modules/DexieDatabase";
import { HeaderTitle } from "../components/Contacts/HeaderTitle";
import { Input } from "../components/Contacts/Add/Input";
import { Select } from "../components/Contacts/Add/Select";
import { SubmitButton } from "../components/Contacts/Add/SubmitButton";
import { CancelButton } from "../components/Contacts/Add/CancelButton";

/**
 * Custom useForm() hook from 'react-hook-form' is used for form handling
 **/

type Contact = {
    name: string;
    phone: string;
    email: string;
    gender: string;
    age: string;
    avatar: any;
    occupation: string;
}

type FormValues = {
    id: string;
    value?: string;
    type: string;
    label: string;
    name: string;
    register: any;
    required: boolean;
    accept?: string;
    gender: string;
    defaultValue?: string;
}

export const ContactsAdd = (): JSX.Element => {

    /* useForm() hook const for handling the adding form */
    const { register, handleSubmit } = useForm<FormValues>();

    /* useHistory() hook const for redirecting the page after form submission */
    const history = useHistory();

    /* Decoding the uploaded image from input to base64 for storing into database */
    const decodeAvatar = (file: any) => {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.readAsDataURL(file as any)
        })
    }

    /* Submit the form with actual data collected from the form */
    const submitFormHandler = async (data: Contact) => {
        /* Calling the decodedAvatar() method with the form input file as the parameter to be decoded */
        const decodedAvatar = await decodeAvatar(data.avatar[0])

        /* Inserting collected form data into database */
        await DexieDatabase.contacts.add({
            name: data.name,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            age: data.age,
            occupation: data.occupation,
            avatar: decodedAvatar,
        });

        /* Redirecting to /contacts page */
        history.push("/contacts");
    }


    return (
        <>
            <HeaderTitle title="Add contact" />
            <form onSubmit={handleSubmit(submitFormHandler)} className="mt-10 flex flex-col md:px-12">

                <Input type="text" id="name" name="name" label="Full Name" register={register} required />
                <Input type="email" id="email" name="email" label="Email Address" register={register} required />
                <Input type="tel" id="phone" name="phone" label="Phone Number" register={register} required />
                <Input type="text" id="occupation" name="occupation" label="Occupation" register={register} required />

                <div className="flex flex-wrap -mx-2">
                    <div className="w-1/2 px-2 flex flex-col">
                        <Select id="gender" selectName="gender" register={register} required />
                    </div>
                    <div className="w-1/2 px-2 flex flex-col">
                        <Input type="number" id="age" name="age" label="Age" register={register} required />
                    </div>
                </div>

                <Input type="file" accept="image/*" id="avatar" name="avatar" label="Avatar" register={register} required />

                <div className="flex mt-8 justify-end items-center">
                    <CancelButton title="Cancel" />
                    <SubmitButton title="Submit" />
                </div>
            </form>
        </>
    )
}