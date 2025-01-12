import { useForm } from "react-hook-form";
import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { InputMask } from "@react-input/mask";

const schema = z.object({
  phone: z.string().transform((arg, ctx) => {
    const phone = parsePhoneNumberFromString(arg, {
      defaultCountry: "BY",
      extract: false,
    });

    if (phone?.isValid()) {
      return phone!.number;
    }

    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Неверный номер",
    });

    return z.NEVER;
  }),
});

type Schema = z.infer<typeof schema>;

export function UserLoginForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "+375",
    },
  });

  const onSubmit = (values: Schema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name={"phone"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <InputMask
                  className={
                    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  }
                  mask={"+375 (__) ___-__-__"}
                  replacement={{ _: /\d/ }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={"w-full place-center mt-5"}>
          <Button className={"w-full rounded-2xl"} type={"submit"}>
            Отправить код
          </Button>
        </div>
      </form>
    </Form>
  );
}
