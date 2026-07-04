import { NavLink, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const { pathname } = useLocation();
  return (
    <section className="container-site min-h-screen pt-28 flex items-center justify-center">
      <div className="rounded-xl border border-line bg-night-deep/80 overflow-hidden w-full max-w-lg font-mono text-sm">
        {/* terminal title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-night-raised/60">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          <span className="ml-2 text-xs text-fog">ayoub@portfolio: ~</span>
        </div>
        <div className="p-6 leading-7">
          <p>
            <span className="text-accent">$</span> cd {pathname}
          </p>
          <p className="text-fog">
            bash: cd: {pathname}: No such file or directory
          </p>
          <p className="mt-4 text-white text-2xl font-bold">404</p>
          <NavLink to="/" className="btn btn-outline mt-6">
            cd ~/home
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
