import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";

export const useLoader = <T>(loaderFunc: (args: LoaderFunctionArgs) => T) => {
  const data = useLoaderData<typeof loaderFunc>() as T;

  const navigation = useNavigation();
  const state = navigation.state;
  const isLoading = state === "loading";

  return { data, isLoading };
};
