import { Review, User } from "@/utils/prisma";

type MutantReviewType = Omit<
  Review,
  "created_at" | "updated_at" | "user_id" | "restaurant_id"
> & {
  user?: User;
};

export const calcAverageRating = (reviews: MutantReviewType[]) => {
  if (reviews.length === 0) return 0;

  return Math.round(
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  );
};

export const generateStars = (rating: number) => {
  const filled = Array(rating).fill("★");
  const empty = Array(5 - rating).fill("☆");
  return filled.concat(empty);
};
