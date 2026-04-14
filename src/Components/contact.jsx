function Contact(){
  return(
    <div className="contact-grid grid grid-cols-2" >
    <div className="contact-emails-and-heading border">
      <span>04 — Contact</span>
      <h3>Let's build</h3>
      <p>
        Tell us about your project. We will get back to you within 24 hours with
        a plan built around your brand.</p>
        <ul>
          <span>Email</span>
          <li>
            <a href="#">mxdelitehq@gmail.com</a>
          </li>
          <span>Instagram</span>
          <li>
            <a href="#">@mxdelite</a>
          </li>
          <span>Location</span>
          <li>
            <a href="#">Available Worldwide</a>
          </li>
        </ul>
    </div>
     <div className="Form border text-center" >
      <label htmlFor="Name">Name</label><br />
      <input type="text" name="" id="" /> <br />
      <label htmlFor="Email">Email</label><br />
      <input type="text" /> <br />
      <label htmlFor="Project-brief">Project Brief</label> <br />
      <textarea name="project-brief" id=""></textarea>
      <button className="bg-white text-black p-2 ml-10">Submit</button>
     </div>

    </div>
  );
}
export default Contact;