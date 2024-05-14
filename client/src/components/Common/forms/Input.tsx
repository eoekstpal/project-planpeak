function Input(props: any) {
  return (
    <label className="block border border-solid border-ppVeryLightGray rounded overflow-hidden">
      <input
        className="p-2 text-sm"
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholderText}
      />
    </label>
  );
}
export default Input;
