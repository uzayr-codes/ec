function Form() {
  return (
    <div className="col-md-5">
      <form className="form-background">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Book an Appointment
          </label>
          <input
            type="text"
            className="form-control py-3"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control py-3"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">
            Select a Date
          </label>
          <input
            type="date"
            className="form-control p-3"
            id="appointmentDate"
            name="appointmentDate"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Form;
