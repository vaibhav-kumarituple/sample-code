"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import FormInput from "@/components/common/FormInput";
import SaveButton from "@/components/common/SaveButton";
import Toast from "@/components/common/Toast";

interface DeleteButtonProps {
  id: string;
  deleteFunction: (id: string, reason: string) => any;
  closeDialogHandler: () => void;
  successMessage: string;
}

export default function DeleteButton(props: DeleteButtonProps) {
  const { successToast } = Toast();
  const [error, setError] = useState("");
  const formSchema = z.object({
    reason: z
      .string()
      .trim()
      .toUpperCase()
      .min(1, "Reason is required")
      .min(10, "Reason must be of 10 characters.")
      .max(20, "Reason must not be greater than 20 characters."),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError("");
    try {
      const response = await props.deleteFunction(props.id, values.reason);
      if (response.hasError) {
        setError(response.message);
        return;
      }
      successToast(props.successMessage);
      props.closeDialogHandler();
    } catch (error) {
      const err = error as Error;
      setError(err.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-5/6">
        <div className="space-y-2">
          <FormInput
            label="Reason"
            placeholder="Enter reason"
            name="reason"
            form={form}
          />
          <p className="text-xs text-red-600">{error}</p>
        </div>
        <SaveButton
          className="w-[100px] my-6 float-right bg-red-500 hover:bg-red-600"
          label="Delete"
          variant={"destructive"}
          onClick={() => onSubmit}
        />
      </form>
    </Form>
  );
}
