import { Link, LinkProps } from "@remix-run/react";

export function Anchor(props: LinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        const href = window.location.href;
        if (href.includes("/#")) {
          const sectionName = href.substring(href.indexOf("#") + 1);
          const section = document.getElementById(sectionName);
          section?.scrollIntoView({ behavior: "smooth" });
          return;
        }

        if (props.onClick) {
          props.onClick(e);
        }
      }}
    />
  );
}
