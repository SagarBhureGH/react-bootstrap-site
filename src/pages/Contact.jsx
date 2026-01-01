function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
export default Contact;
