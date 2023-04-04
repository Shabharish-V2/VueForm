<script setup lang="ts">
import { useForm, useField, useIsFormValid } from "vee-validate";
import { schema } from "@/components/typescript/Myform"


// To reset values in input box
const { errors, resetForm } = useForm({
    validationSchema: schema,
    initialValues: {
        username: "",
        email: "",
        password: ""
    },
});

// declare v-model var
const { value: username } = useField("username");
const { value: email } = useField("email");
const { value: password } = useField("password");

const isFormValid = useIsFormValid();
let errorMessage = "";
// Function on submit button
const submitData = () => {
    if (isFormValid.value) {
        const formData = {
            username: username.value,
            email: email.value,
            password: password.value
        };
        console.log("Form data:", formData);
        resetForm();
    } else {
        errorMessage = "Please fix the errors above before submitting the form.";
    }
}



</script>

<template>
    <div class="formbody">
        <form>
            <div :validation-schema="schema" class="myform">
                <div>

                    <label for="username">Name:</label>
                    <input type="text" id="username" v-model="username" />
                    <p class="error">{{ errors.username }}</p>
                </div>
                <br />
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" />
                    <p class="error">{{ errors.email }}</p>
                </div>
                <br />
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="Password" v-model="password" />
                    <p class="error">{{ errors.password }}</p>
                </div>
                <br />
                <div>
                    <button @click.prevent="submitData()">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
.formbody {
background-color: #e4e1e1;
width: 300px;
padding: 30px;
margin: auto;
border-radius: 30px;
    
}
p {
    color: red;
}
</style>




