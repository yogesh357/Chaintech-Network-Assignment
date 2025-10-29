function Button({ info, onClick, ...rest }) {
  return (
    <div className="w-full text-center py-2 rounded-3xl bg-linear-to-br from-white to-black">
      <button
        {...rest}
        className="font-bold text-xl cursor-pointer"
        onClick={onClick}
      >
        {info}
      </button>
    </div>
  );
}

export default Button;
