import {
  ItemStyles,
  Rating,
  RatingProps,
  RoundedStar,
} from "@smastrom/react-rating";

type Props = Omit<RatingProps, "itemStyles" | "halfFillMode">;

export function StarRating(props: Props) {
  return (
    <Rating {...props} itemStyles={ratingItem} style={{ width: "100%" }} />
  );
}

const ratingItem: ItemStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "rgb(255, 210, 0)",
  inactiveFillColor: "gray",
};
