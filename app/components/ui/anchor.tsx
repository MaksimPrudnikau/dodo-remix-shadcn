import { Link, LinkProps } from "@remix-run/react";

export function Anchor(props: LinkProps) {
    return <Link {...props} className={'hover:text-orange-500'}/>
}
