import Link from "next/link";

const MealsPage = () => {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href={"/meals/food-1"}>Food 1</Link>
      </p>
      <p>
        <Link href={"/meals/food-2"}>Food 2</Link>
      </p>
    </main>
  );
};

export default MealsPage;
