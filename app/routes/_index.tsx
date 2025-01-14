import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { db } from "~/lib/kysely.server";
import _ from "lodash";

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

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <div></div>}
      <Button>Test</Button>
    </div>
  );
}

export async function loader() {
  const products = await db
    .selectFrom("products")
    .innerJoin(
      "products_by_section",
      "products_by_section.product",
      "products.id",
    )
    .innerJoin(
      "product_sections",
      "product_sections.id",
      "products_by_section.section",
    )
    .select([
      "products.id as id",
      "products.name as name",
      "products.pic",
      "product_sections.id as sectionId",
      "product_sections.name as sectionName",
    ])
    .execute();

  return _.groupBy(products, (p) => p.sectionId);
}
