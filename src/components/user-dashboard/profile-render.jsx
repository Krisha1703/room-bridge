import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserProfileSchema } from "../../../schemas";
import { updateUser } from "../../../actions/update-user";
import InputField from "../form-modal/input-field";
import SubmitButton from "../form-modal/submit-button";
import Heading from "./heading";

const renderProfileForm = ({user}) => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    const [uploadSuccess, setUploadSuccess] = useState("");

    const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        setUploadSuccess("✅ File uploaded successfully!");
    } else {
        setUploadSuccess(""); // Reset message when no file is selected
    }
    };


    const form = useForm({
        resolver: zodResolver(UserProfileSchema),
        defaultValues: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobile: user.mobile,
          city: user.city,
          country: user.country,
          gender: user.gender,
          dob: user.dob,
          image: user.profileImage,
        },
      });

    const onSubmit = (data) => {
        
        startTransition(() => {
        updateUser(data).then((response) => {
            if (response.error) {
            setError(response.error);
            } else {
            setSuccess(response.success);
            }
        });
        console.log("save button clicked and update user function tirggered!");
        console.log(data);
        });
    };
        
    return (
    <>
        <Heading heading={"Update Personal Information"} />

        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">

           {/* Profile Image */}
            <InputField
                label="Profile Image"
                id="image"
                type="file"
                register={form.register("image")}
                error={form.formState.errors.image}
                disabled={isPending}
                onChange={handleFileChange} // Handle file change event
            />

            {/* Show success message */}
            {uploadSuccess && <p className="text-green-500 text-sm">{uploadSuccess}</p>}

            {/* Recovery Email */}
            <InputField
                label="Recovery Email"
                id="recoveryEmail"
                type="email"
                register={form.register("recoveryEmail")}
                error={form.formState.errors.recoveryEmail}
                disabled={isPending}
            />

            {/* First Name */}
            <InputField
                label="First Name"
                id="firstName"
                type="text"
                register={form.register("firstName")}
                error={form.formState.errors.firstName}
                disabled={isPending}
            />
        
            {/* Last Name */}
            <InputField
                label="Last Name"
                id="lastName"
                type="text"
                register={form.register("lastName")}
                error={form.formState.errors.lastName}
                disabled={isPending}
            />

            {/* Email */}
            <InputField
                label="Email"
                id="email"
                register={form.register("email")}
                readOnly={true}
            />

            {/* Mobile Number */}
            <InputField
                label="Mobile Number"
                id="mobile"
                type="tel"
                register={form.register("mobile")}
                error={form.formState.errors.mobile}
                disabled={isPending}
            />

            {/* City */}
            <InputField
                label="City"
                id="city"
                type="text"
                register={form.register("city")}
                error={form.formState.errors.city}
                disabled={isPending}
            />
        
            {/* Country */}
            <InputField
                label="Country"
                id="country"
                type="text"
                register={form.register("country")}
                error={form.formState.errors.country}
                disabled={isPending}  
            />

            {/* Gender */}
            <InputField
                label="Gender"
                id="gender"
                type="select"
                options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" },
                ]}
                register={form.register("gender")}
                error={form.formState.errors.gender}
                disabled={isPending}
            />

            {/* Date Of Birth */}
            <InputField
                label="Date of Birth"
                id="dob"
                type="date"
                register={form.register("dob")}
                error={form.formState.errors.dob}
                disabled={isPending}  
            />

            <SubmitButton type="Save" disabled={isPending} profile={true}/>

        </form>
    </>

    );
}

export default renderProfileForm;
  