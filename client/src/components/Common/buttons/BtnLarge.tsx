function BtnLarge(props: any) {
  return (
    <span className={`block overflow-hidden ${props.bgColor} rounded`}>
      <button
        type="button"
        className={`w-full py-4 px-4 text-lg ${props.textColor} font-bold text-center`}
      >
        {props.text}
      </button>
    </span>
  );
}

export default BtnLarge;
