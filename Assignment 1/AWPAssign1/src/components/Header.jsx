function Header() {
  const navItems = ['Home', 'About', 'Events', 'Register', 'Contact']

  return (
    <header style={{ border: '1px solid black', margin: '12px', padding: '12px' }}>
      <div>
        <a href="#home">EventHub</a>

        <nav
          aria-label="Primary"
          style={{
            borderTop: '1px solid black',
            marginTop: '12px',
            paddingTop: '12px',
          }}
        >
          {/* {navItems.map((item) => (
            <span key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>{' '}
            </span>
          ))} */}
          {
            navItems.map((item)=>(
              <span key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>{' '}
              </span>
            ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
