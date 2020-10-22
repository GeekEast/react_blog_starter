import React from 'react';

const NavLink = ({ label, link = '#!' }: { label: string; link?: string }) => {
  return (
    <div className="w-20 leading-12 text-center font-semibold text-white">
      <a href={link}>{label}</a>
    </div>
  );
};

const Bar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="h-12 bg-black-80 flex justify-between">
      {!!children && children}
    </div>
  );
};

const Header = () => {
  return (
    <Bar>
      <div className="flex flex-1">
        <NavLink label="Home" link="https://www.google.com" />
        <NavLink label="About" />
        <NavLink label="Tags" />
      </div>
    </Bar>
  );
};

const Footer = () => {
  return (
    <Bar>
      <div>hello</div>
    </Bar>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <main className="bg-blue-30 h-screen" />
      <Footer />
    </div>
  );
};

export default App;
