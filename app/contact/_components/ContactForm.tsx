"use client";

import { formSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { FaArrowRightLong } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export const ContactForm = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isFormInView = useInView(formRef, {once: true});
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values) {
      toast({
        title: "Email was sent!",
      });
      form.reset();
      console.log(values);
    }
  }

  return (
    <section
      className="wrapper relative py-[76px] md:py-[200px] flex flex-col lg:flex-row lg:gap-20 lg:justify-between"
    >
      <motion.h1
        className="title w-[250px] md:w-auto lg:w-[270px] mb-5 relative"
        ref={titleRef}
        initial={{ opacity: 0 }}
        animate={isTitleInView ? { opacity: 1} : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Connect with us
      </motion.h1>
      <div className="max-w-[311px] md:max-w-full lg:w-full lg:max-w-[730px]">
        <motion.div className="relative"
        ref={formRef}
        initial={{ opacity: 0, scale: 0.5, y: 100}}
        animate={isFormInView ? {opacity: 1, scale: 1, y: 0} : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut"}}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          className="h-[44px] w-[311px] md:w-full lg:w-full"
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="h-[44px] w-[311px] md:w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        className="w-[311px] md:w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="send"
                size="square"
                className="ml-auto relative top-[-32px]"
              >
                <FaArrowRightLong className="w-[26px] h-[20px] text-[#fff]" />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};
