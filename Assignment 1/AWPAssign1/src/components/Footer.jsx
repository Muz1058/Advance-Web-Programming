function Footer() {
  return (
    <footer
      id="contact"
      style={{ border: '1px solid black', margin: '12px', padding: '12px' }}
    >
      <div>
        <p>EventHub | Contact: hello@eventhub.pk</p>
        <div
          style={{
            borderTop: '1px solid black',
            marginTop: '12px',
            paddingTop: '12px',
          }}
        >
          <a href="https://instagram.com">Instagram</a>
          {' | '}
          <a href="https://linkedin.com">LinkedIn</a>
          {' | '}
          <a href="https://x.com">X</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
