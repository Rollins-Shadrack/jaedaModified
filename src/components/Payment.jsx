import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paymentValidation } from "@/lib/validation/paymentSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Axios from 'axios'
import { useRouter } from 'next/navigation'


const Payment = () => {
  const router = useRouter()

  const form = useForm({
    resolver: yupResolver(paymentValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    },
    mode:"onSubmit"
  });

  const onSubmit = (values) =>{
    Axios.post('https://sandbox.intasend.com/api/v1/checkout/', {
      public_key: 'ISPubKey_test_127e521f-5aec-4a30-ad44-dfd50da53cad',
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone_number: values.mobile,
      host: 'https://associatesjaeda.com/',
      amount:"10",
      currency: 'KES',
    })
    .then((res) => {
      router.push(res.data.url)
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="absolute top-0 right-0 text-xs bg-black text-white rounded-l-xl px-3 py-1">Buy Now</button>
      </SheetTrigger>
      <SheetContent className="bg-white sm:max-w-lg max-sm:w-full overflow-y-auto no-scrollbar">
        <SheetHeader>
          <SheetTitle>Buy Now</SheetTitle>
          <SheetDescription>
            Place your order here and rest easy. Click 'Buy Now' to confirm, and your items will be swiftly delivered to your doorstep
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="mb-3">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="mb-3">
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="mb-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="mb-3">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input placeholder="Mobile" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>


        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </SheetContent>
    </Sheet>
  );
};

export default Payment;
