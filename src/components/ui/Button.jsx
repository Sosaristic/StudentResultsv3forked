export default function Button({type, onClick, children, disabled}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-dark-green disabled:bg-gray-700 text-white hover:bg-v-dark-green transition-colors duration-200 text-lg font-medium w-full p-4 rounded"
    >
      {children}
    </button>
  );
}
