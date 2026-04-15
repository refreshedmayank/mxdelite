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
     <div className="Form border text-center " >
      <label htmlFor="Name">Name</label><br /><br />
      <input className="border bg-transparent text-center text-white" type="text" name="" id="" /> <br /><br />
      <label htmlFor="Email">Email</label><br /><br />
      <input className=" text-white border bg-transparent" type="text" /> <br /> <br />
      <label htmlFor="Project-brief">Project Brief</label> <br /> <br />
      <textarea className="border bg-transparent text-center "  name="project-brief" id=""></textarea> <br />br
      <button className="bg-transparent border p-2 ml-10">Submit</button>
     </div>

    </div>
  );
}
export default Contact;