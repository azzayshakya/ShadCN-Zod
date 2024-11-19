import { useForm } from "react-hook-form";

type FormData={
  userName:string;
  password:string;
};

const CreateAccountForm = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
      console.log(data);
    };
  
    return (
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userName")} placeholder="Email" />
        <input {...register("password")} placeholder="Password" />


      </form>
    );
  };
export default CreateAccountForm;