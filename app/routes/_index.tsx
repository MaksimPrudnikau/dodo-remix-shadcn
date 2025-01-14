import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { createSupabase } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const { data, isLoading } = useLoader(loader);
  const data = useLoaderData<typeof loader>();
  const isLoading = useNavigation().state === "loading";
  console.log(data);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <div></div>}
      <Button>Test</Button>
    </div>
  );
}

export async function loader(args: LoaderFunctionArgs) {
  const { supabase, headers } = await createSupabase(args);

  const { data: products, error } = await supabase
    .from("products_by_section")
    .select("product, section, products(id, name)");
  return products;
}
