import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema, AuthSchema } from "@/features/auth/authSchema";
import { authenticateUser } from "@/features/auth/authService";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import FormErrorMessage from "../ui/FormErrorMessage";

const AuthForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

const onSubmit = async (data: AuthSchema) => {
try {
      console.log("Form Submitted with data:", data);
      // await authenticateUser(data.email, data.password);
      alert("User is created successful  brother !");
  } catch (error) {
      alert("User is not created - failed !");
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 bg-white p-6 shadow-lg rounded-md"
      >
        <h1 className="text-center text-2xl font-semibold text-gray-700">User Authentication</h1>
        

        <div>
          <Label htmlFor="fullName" className="text-gray-600">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            {...register("fullName")}
          />
          {errors.fullName && <FormErrorMessage>{errors.fullName.message}</FormErrorMessage>}
        </div>
        <div>

        </div>

        <div>
          <Label htmlFor="email" className="text-gray-600">Email</Label>
          <Input
            id="email"
            type="email"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            {...register("email")}
          />
          {/* {(()=>{
            if(errors.email){
              return <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            }
          })()} */}
          {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
        </div>

        
        <div>
          <Label htmlFor="password" className="text-gray-600">Password</Label>
          <Input
            id="password"
            type="password"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            {...register("password")}
          />
          {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
        </div>


        <div>
          <Label htmlFor="phone" className="text-gray-600">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            {...register("phone")}
          />
          {errors.phone && <FormErrorMessage>{errors.phone.message}</FormErrorMessage>}
        </div>


        <div>
          <Label htmlFor="address" className="text-gray-600">Address</Label>
          <textarea
            id="address"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            {...register("address")}
          />
          {errors.address && <FormErrorMessage>{errors.address.message}</FormErrorMessage>}
        </div>

      
        <div>
          <Label htmlFor="dob" className="text-gray-600">Dte of Birth</Label>
          <Input
            id="dob"
            type="date"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            {...register("dob")}
          />
          {errors.dob && <FormErrorMessage>{errors.dob.message}</FormErrorMessage>}
        </div>

        
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 rounded border-gray-300 focus:ring-gray-500"
            {...register("terms")}
          />
          <Label className="text-gray-600">I agree to the Terms and Conditions</Label>
          {errors.terms && <FormErrorMessage>{errors.terms.message}</FormErrorMessage>}
        </div>

        <Button
          type="submit"
          className="w-full rounded-md bg-gray-700 py-2 text-white hover:bg-gray-800 focus:outline-none"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
