export default function CardComponent({
  content,
  index,
  updateItem,
  deleteItem,
}) {
  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(ev) => {
          updateItem(index, ev.target.value);
        }}
      />
      <button
        onClick={() => {
          deleteItem(index);
        }}
      >
        Delete Me
      </button>
      <br />
    </div>
  );
}
