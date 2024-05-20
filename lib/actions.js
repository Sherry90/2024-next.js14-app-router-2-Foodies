"use server";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    subtitle: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
};
