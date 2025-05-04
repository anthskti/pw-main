export default function PageContainer({ children }) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 min-h-[60vh]">
        {children}
      </div>
    );
  }