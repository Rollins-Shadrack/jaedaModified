'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema } from "@/lib/validation/schema";
import { contactCards } from "@/constants/contact";
import Container from "@/components/Container";

const ContactForm = () => {
  const form = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <h1 className="md:text-3xl text-xl text-brandRed font-bold text-center mb-3">Contact Us</h1>

      <p className="text-gray-500 text-lg text-center">We'd love to talk about how we can help you</p>

      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
        <Card className="">
          <CardHeader>
            <p className="text-gray-500 text-lg mb-3 font-bold">
              Let's get in <span className="text-brandRed">Touch</span>
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter First Name" className="bg-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Last Name" className="bg-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Email" className="bg-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <PhoneInput
                            {...field}
                            placeholder="Enter Mobile Number"
                            inputStyle={{ padding: "18px 43px", width: "100%", backgroundColor: "rgba(0,0,0,0.1)" }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message" className="resize-none bg-gray-200" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="bg-brandBluish inline-flex items-center">
                  <p>Submit </p>
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Form>
          </CardHeader>
        </Card>
        <div className="">
          {contactCards.map((card, idx) => (
            <Card key={idx} className="mb-5">
              <CardHeader>
                <div className="flex items-center space-x-5">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    {/* {React.createElement(card.icon, { size: "20" })} */}
                  </div>
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="font-semibold text-lg">{card.title}</CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                    <a href={card.cta.link} className="font-medium underline">
                      {card.cta.name}
                    </a>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
