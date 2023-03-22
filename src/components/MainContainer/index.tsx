function MainContainer({ children, active = 0 }) {
  return (
    <div>
      {children[active]}
    </div>
  );
}

export { MainContainer };
