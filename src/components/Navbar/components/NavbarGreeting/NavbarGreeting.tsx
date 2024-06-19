const NavbarGreeting: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Buen día";
    } else if (hour < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };

  return <h2 className="navbar-greeting">{getGreeting()}, Rodrigo!</h2>;
};

export default NavbarGreeting;
