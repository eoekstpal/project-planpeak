function Checkbox(props: any) {
  return (
    <label id={props.id}>
      <input type="checkbox" name={props.name} id={props.id} className="p-2" />
    </label>
  );
}

export default Checkbox;
