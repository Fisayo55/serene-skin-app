const Form = () => {
  return (
    <form className="flex flex-col gap-4 mt-60">
      <input type="text" name="" id="" placeholder="Full name" />
      <input type="text" name="" id="" placeholder="Email address" />
      <input type="text" name="" id="" placeholder="Phone number" />
      <textarea name="textarea mb-2" id="" placeholder="Your message" />
      <button type="submit" className="btn self-start">
        Send Message
      </button>
    </form>
  );
};

export default Form;
