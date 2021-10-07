import { useParams } from "react-router";
import DexieDatabase from "../modules/DexieDatabase";
import { useLiveQuery } from "dexie-react-hooks";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import HeaderTitle from "../components/Contacts/HeaderTitle";
import Input from "../components/Contacts/Edit/Input";
import Select from "../components/Contacts/Edit/Select";
import SubmitButton from "../components/Contacts/Edit/SubmitButton";
import CancelButton from "../components/Contacts/Edit/CancelButton";

/**
 * Using useLiveQuery() from 'dexie-react-hooks' for retrieving the details about a certain contact from database. 
 * useLiveQuery() is acting like the useEffect() hook from React.
 * 
 * 
 * Custom useForm() hook from 'react-hook-form' is used for form handling
 **/

const ContactsEdit = () => {

    /* Getting the contactId parameter passed into the route using the useParams() hook */
    const { contactId } = useParams()

    /* useHistory() hook const for redirecting the page after form submission */
    const history = useHistory();

    /* useForm() hook const for handling the adding form */
    const { register, handleSubmit } = useForm();

    /* Query the database and retrieving the contact which match the contacId passed into the route as parameter */
    const contactDetails = useLiveQuery(() => DexieDatabase.where({ id: Number(contactId) }).toArray(), []);

    /* Checking if the query returns any data */
    if (!contactDetails) return null

    /* Destructuring the query result and take the certain details of the contact */
    const { id, name, email, phone, age, gender, occupation, avatar } = contactDetails[0];

    /* Decoding the uploaded image from input to base64 for storing into database */
    const decodeAvatar = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.readAsDataURL(file)
        })
    }

    /* Submit the form with actual data collected from the form */
    const submitFormHandler = async data => {
        /* Checking if there is an image selected and calling the decodeAvatar() method with the image file or fallback to the current avatar */
        const decodedAvatar = data.avatar.length > 0 ? await decodeAvatar(data.avatar[0]) : avatar;

        /* Updating the database contact details by selecting the actual id of the contact and updating the data */
        await DexieDatabase.update(id, {
            name: data.name,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            age: data.age,
            occupation: data.occupation,
            avatar: decodedAvatar,
        });

        /* Redirecting to the previous contact details page */
        history.push(`/contacts/details/${id}`);

    }

    return (
        <div>
            <HeaderTitle title={`Edit details for ${name}`} />
            <form onSubmit={handleSubmit(submitFormHandler)} className="mt-10 flex flex-col md:px-12">

                <Input type="text" defaultValue={name} id="name" name="name" label="Full Name" register={register} />
                <Input type="email" defaultValue={email} id="email" name="email" label="Email Address" register={register} />
                <Input type="tel" defaultValue={phone} id="phone" name="phone" label="Phone Number" register={register} />
                <Input type="text" defaultValue={occupation} id="occupation" name="occupation" label="Occupation" register={register} />

                <div className="flex flex-wrap -mx-2">
                    <div className="w-1/2 px-2 flex flex-col">
                        <Select id="gender" defaultValue={gender} name="gender" label="Gender" {...register("gender")} />
                    </div>
                    <div className="w-1/2 px-2 flex flex-col">
                        <Input type="number" defaultValue={age} id="age" name="age" label="Age" register={register} />
                    </div>
                </div>

                <Input isAddForm={false} type="file" accepEditt="image/*" id="avatar" name="avatar" label="Avatar" register={register} />

                <div className="flex mt-8 justify-end items-center">
                    <CancelButton to={`/contacts/details/${id}`} title="Cancel" />
                    <SubmitButton title="Submit" />
                </div>
            </form>
        </div>
    )
}

export default ContactsEdit;