const Person = () => {
  const name = "Emelia";
  return (
    <div>
      <h1> Mysteriousity of the month </h1>
      <img
        className="person-pic"
        src="https://lh5.googleusercontent.com/jTcvYFcC3pnLnwyykeB1IdwNhNZ2Ca7WwG4fg0TRcHy0Ap6B8FfSjHZVSbjEYRtHj2Cb6txHPxcUJqixQXj8=w1960-h10000-rw"
        alt="picture of Emelia"
      />
      <p>
        {" "}
        {name} : "Well I’ve only been to a few, but probably either cinema or
        rage room as it’s where I met my boyfriend……🥰"
      </p>
    </div>
  );
};

export default Person;