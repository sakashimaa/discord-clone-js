const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/10 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20">
        {children}
      </div>
    </div>
  );
};
export default layout;
