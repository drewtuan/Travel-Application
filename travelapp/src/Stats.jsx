export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageOfItemsPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageOfItemsPacked === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and your already packed ${numPacked} (${percentageOfItemsPacked})`}
      </em>
    </footer>
  );
}
