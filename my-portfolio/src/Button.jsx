export default function Button({ onClick, children }) {
    return (
      <button className="p-2 bg-blue-500 text-white rounded" onClick={onClick}>
        {children}
      </button>
    );
  }