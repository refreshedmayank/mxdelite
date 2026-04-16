function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <div className="border">
        <span>04 — Contact</span>
        <h2>Let's build</h2>
        <p>
          Tell us about your project. We will get back to you within 24 hours
          with a plan built around your brand.
        </p>
        <div className="flex flex-col">
          <span>Email</span>
          <a href="#">mxdelitehq@gmail.com</a>
          <span>Instagram</span>
          <a href="#">@mxdelite</a>
          <span>Location</span>
          <a href="#">Available Worldwide</a>
        </div>
      </div>

      <div className="border p-6 flex flex-col text-lg">
        <label htmlFor="name">Name</label>
        <input className="" type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="project-brief">Project Brief</label>
        <textarea id="project-brief" name="project-brief"></textarea>
        <button className="mt-5 bg-white text-black p-2 w-40 m-auto" type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
