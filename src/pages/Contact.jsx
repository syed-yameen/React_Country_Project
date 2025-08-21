export const Contact = () => {
// // when the user submit the form {handleFormSubmit}
// 1. React 19 returns an api named as formData  
// 2. It returns (formData.entries()). on console(form.entries()
// 3.  It returns  an interator on console window  
// 4. Now to convert iterable pairs into plain objects we use  Object.fromEntries(formData.entries())

const handleFormSubmit=(formData)=> {
  console.log(formData.entries())
 const Data= Object.fromEntries(formData.entries())
   console.log(Data);
   
}

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your name"
            name="username"
            autoComplete="off"
          />

          <input type="text"
            className="form-contol"
            required
            placeholder="Enter your email here"
            name="email"
            autoComplete="off" />

          <textarea
            name="message"
            className="form-control"
            rows="10"
            required
            placeholder="Enter your message"
            autoComplete="off">
          </textarea>

          <button type="submit" value="send" >Send</button>
        </form>

      </div>

    </section>
  );
};
