function Input(props: any) {
  return (
    <label className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden">
      <input
        className="p-2"
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholderText}
      />
    </label>
  );
}
export default Input;
